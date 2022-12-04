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

namespace UFO2.DAL.UfoRepo
{
    public class UfoRepository : IUfoRepository
    {
        private readonly UfoContext _db;

        public UfoRepository(UfoContext db)
        {
            _db = db;
        }

        public async Task<bool> Reg(Ufo innUfo)
        {
            try
            {
                var reg = new Ufoer();
                reg.Summary = innUfo.Summary;
                reg.Country = innUfo.Country;
                reg.Shape = innUfo.Shape;
                reg.State = innUfo.State;
                reg.Date_time = innUfo.Date_time;
                reg.Duration = innUfo.Duration;
                reg.Stats = innUfo.Stats;
                reg.Report_link = innUfo.Report_link;
                reg.Text = innUfo.Text;
                reg.Posted = innUfo.Posted;
                reg.City_latitude = innUfo.City_latitude;
                reg.City_longitude = innUfo.City_longitude;
                reg.City_location = innUfo.City_location;
                reg.Location = innUfo.Location;
                reg.Time = innUfo.Time;


                _db.Ufoer.Add(reg);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }



        public async Task<List<Ufoer>> GetUfoList()
        {
            try
            {
                List<Ufoer> allUfos = await _db.Ufoer.Select(u => u).ToListAsync();
                return allUfos;
            }
            catch
            {
                return null;
            }

        }

        public async Task<Ufoer> GetUfo(int Id)
        {
            Ufoer enUfo = await _db.Ufoer.FindAsync(Id);

            return enUfo;
        }



        public async Task<bool> Delete(int id)
        {
            try
            {
                Ufoer enDBUfo = await _db.Ufoer.FindAsync(id);
                _db.Ufoer.Remove(enDBUfo);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> Edit(Ufo editUfo)
        {
            try
            {
                Ufoer editObject = await _db.Ufoer.FindAsync(editUfo.Id);

                editObject.Summary = editUfo.Summary;
                editObject.Country = editUfo.Country;
                editObject.State = editUfo.State;
                editObject.Date_time = editUfo.Date_time;
                editObject.Shape = editUfo.Shape;
                editObject.Duration = editUfo.Duration;
                editObject.Stats = editUfo.Stats;
                editObject.Report_link = editUfo.Report_link;
                editObject.Text = editUfo.Text;
                editObject.Posted = editUfo.Posted;
                editObject.City_latitude = editUfo.City_latitude;
                editObject.City_longitude = editUfo.City_longitude;
                editObject.City_location = editUfo.City_location;
                editObject.Location = editUfo.Location;
                editObject.Time = editUfo.Time;

                await _db.SaveChangesAsync();
            }
            catch
            {
                return false;
            }
            return true;
        }

        public async Task<List<Ufoer>> SearchUfoSummary(string searchword)
        {
            try
            {
                List<Ufoer> foundUfos = await _db.Ufoer
                    .Where(u => u.Summary.ToLower().Contains(searchword.ToLower()))
                    .ToListAsync();

                return foundUfos;

            }
            catch
            {
                return null;
            }
        }

        public async Task<List<KeyValuePair<string, int>>> Mapdata()
        {
            try
            {
                var countries = new List<string>();
                var mapdata = new List<KeyValuePair<string, int>>();
                List<Ufoer> allUfos = await _db.Ufoer.Select(u => u).ToListAsync();
                int numberOfObs = 0;

                // Teller antall observasjoner i hvert land i lista
                // og legger i liste som returneres.
                foreach (var ufo in allUfos)
                {
                    if (!countries.Contains(ufo.Country))
                    {
                        countries.Add(ufo.Country);

                        foreach (var u in _db.Ufoer)
                        {
                            if (u.Country == ufo.Country)
                            {
                                numberOfObs++;
                            }
                        }

                        // Formaterer til front-end
                        if (ufo.Country == "USA")
                        {
                            ufo.Country = "United States";
                        }

                        mapdata.Add(new KeyValuePair<string, int>(ufo.Country, numberOfObs));
                        numberOfObs = 0;
                    }
                }

                return mapdata;
            }
            catch { return null; }

        }

    }
}

