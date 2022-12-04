using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Serilog;
using System.Collections.Generic;
using System.Threading.Tasks;
using UFO.Controllers;
using UFO.DAL;

namespace UFO2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CascasdingController : ControllerBase
    {
        private ICddRepository _db;
        private ILogger<CascasdingController> _log;

        public CascasdingController(ICddRepository db, ILogger<CascasdingController> log)
        {
            _db = db;
            _log = log;
        }

        [HttpGet("GetCountries")]
        public async Task<ActionResult> GetCountries()
        {
            try
            {
                List<Countries> countries = await _db.GetCountries();
                return Ok(countries);
            }
            catch
            {
                return NotFound("not found");
            }

        }
        [HttpGet("GetStates/{name}")]
        public async Task<ActionResult> Getstates(string name)
        {

            List<States> states = await _db.GetStates(name);
            if (states == null)
            {
                _log.LogInformation("not found");
                return NotFound("not found");
            }

            return Ok(states);
        }
    }
}
       