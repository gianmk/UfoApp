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
    public class CddRepository : ICddRepository
    {
        private readonly UfoContext _db;

        public CddRepository(UfoContext db)
        {
            _db = db;
        }
        public async Task<List<Countries>> GetCountries()
        {
            try
            {
                List<Countries> countries = await _db.Countries.Select(u => u).ToListAsync();
                return countries;
            }
            catch
            {
                return null;
            }
        }
        public async Task<List<States>> GetStates(string name)
        {
            try
            {
                List<States> states = await _db.States.Where(c => c.country_name == name).ToListAsync();

                return states;
            }
            catch
            {
                return null;
            }
        }
     
        }
    }


