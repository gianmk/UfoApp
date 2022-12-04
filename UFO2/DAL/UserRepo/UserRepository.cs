using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UFO.Model;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;
using UFO.DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

namespace UFO.DAL
{
    public class UserRepository : IUserRepository
    {
        private readonly UfoContext _db;

        public UserRepository(UfoContext db)
        {
            _db = db;
        }

        public static byte[] MakeHash(string password, byte[] salt)
        {
            return KeyDerivation.Pbkdf2(
                                password: password,
                                salt: salt,
                                prf: KeyDerivationPrf.HMACSHA512,
                                iterationCount: 1000,
            numBytesRequested: 32);
        }

        // Kode fra forelesning av Tore Kratterbøll
        public static byte[] MakeSalt()
        {
            var csp = new RNGCryptoServiceProvider();
            var salt = new byte[24];
            csp.GetBytes(salt);
            return salt;
        }

        public async Task<bool> AddUser(User newUser)
        {
            try
            {
                List<UserDB> users = await _db.UserDB.Where(u => u.Username == newUser.Username).ToListAsync();

                // Check if user exsists 
                foreach (var user in users)
                {
                    if (user.Username == newUser.Username)
                    {
                        return false;
                    }
                }

                UserDB addUser = new UserDB();
                byte[] salt = MakeSalt();
                byte[] hash = MakeHash(newUser.Password, salt);

                addUser.Username = newUser.Username;
                addUser.Password = hash;
                addUser.Salt = salt;

                _db.UserDB.Add(addUser);

                await _db.SaveChangesAsync();
                return true;
            }
            catch
            { return false; }
        }

        public async Task<bool> LoggInn(User user)
        {
            try
            {
                UserDB foundUser = await _db.UserDB.FirstOrDefaultAsync(b => b.Username == user.Username);

                byte[] hash = MakeHash(user.Password, foundUser.Salt);
                bool ok = hash.SequenceEqual(foundUser.Password);

                if (ok)
                {
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}

