using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UFO.Model;

namespace UFO.DAL
{
    public class Ufoer
    {
        public int Id { get; set; }
        public string Summary { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Date_time { get; set; }
        public string Shape { get; set; }
        public string Duration { get; set; }
        public string Stats { get; set; }
        public string Report_link { get; set; }
        public string Text { get; set; }
        public string Posted { get; set; }
        public string City_latitude { get; set; }
        public string City_longitude { get; set; }
        public string City_location { get; set; }
        public int commentcount { get; set; }
        public string Location { get; set; }
        public string Time { get; set; }

        public static implicit operator List<object>(Ufoer v)
        {
            throw new NotImplementedException();
        }
    }

    public class Comments
    {
        public int Id { get; set; }
        public int UfoId { get; set; }
        public string Comment { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
    }

    public class Countries
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string capital { get; set; }
    }

    public class States
    {
        public int id { get; set; }
        public string name { get; set; }
        public int country_id { get; set; }
        public string country_name { get; set; }
    }

    public class UserDB
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] Password { get; set; }
        public byte[] Salt { get; set; }
    }


    public class UfoContext : DbContext
    {
        public UfoContext(DbContextOptions<UfoContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Ufoer> Ufoer { get; set; }
        public DbSet<Comments> Comments { get; set; }
        public DbSet<Countries> Countries { get; set; }
        public DbSet<States> States { get; set; }
        public DbSet<UserDB> UserDB { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }
}
