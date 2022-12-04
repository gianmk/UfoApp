using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using UFO.DAL;
using UFO.Model;
using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
using System.Text;
using Serilog;
using Microsoft.Extensions.Logging;
using System.Security.Cryptography.X509Certificates;
using System;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using UFO2.DAL.UfoRepo;

namespace UFO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UfoController : ControllerBase
    {
        private readonly IUfoRepository _db;
        private ILogger<UfoController> _log;
        private const string _loggIn = "loggIn";

        public UfoController(IUfoRepository db, ILogger<UfoController> log)
        {
            _db = db;
            _log = log;
        }
         private bool ValidSession()
        {
            return !string.IsNullOrEmpty(HttpContext.Session.GetString(_loggIn));
        }
        [HttpPost("RegUfo")]
        public async Task<ActionResult> Reg(Ufo innUfo)
        {
            if (!ValidSession()) return Unauthorized("Unauthorized, please log in");
            if (ModelState.IsValid)
            {
                bool ok = await _db.Reg(innUfo);
                if (!ok)
                {
                    _log.LogInformation("Ufo could not be saved");
                    return BadRequest("Ufo could not be saved");
                }
                return Ok(new {message = "sighting added"});
            }

            _log.LogInformation("Feil i inputvalidering");
            return BadRequest("Feil i inputvalidering");
        }
       

        [HttpGet("GetUfoList")]
        public async Task<ActionResult> GetUfoList()
        {
            List<Ufoer> ufolist = await _db.GetUfoList();
            return Ok(ufolist);
        }

        [HttpDelete("deleteUfo/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            if (!ValidSession()) return Unauthorized("Unauthorized, please log in");
            bool ok = await _db.Delete(id);
            if (!ok)
            {
                return NotFound("Ikke fullført");
            }


            return Ok(new { message = "Deleted" });
        }

        [HttpGet("GetUfo/{id}")]
        public async Task<ActionResult> GetUfo(int id)
        {
            Ufoer enUfo = await _db.GetUfo(id);
            if (enUfo == null)
            {
                _log.LogInformation("not found");
                return NotFound("not found");
            }
            return Ok(enUfo);
        }

            [HttpPut("editUfo")]
        public async Task<ActionResult> Edit(Ufo editUfo)
        {
            if (!ValidSession()) return Unauthorized("Unauthorized, please log in" );
            if (ModelState.IsValid) {
                bool ok = await _db.Edit(editUfo);

                if (!ok)
                {
                    _log.LogInformation("Changes could not be saved");
                    return NotFound("Not Found");
                }
                return Ok(new {message = "Updated"} );
            }
            _log.LogInformation("Feil i inputvalidering");
            return BadRequest("Feil i inputvalidering");
        }

        [HttpGet("MapData")]
        public async Task<ActionResult> Mapdata()
        {
            List<KeyValuePair<string, int>> mapdata = await _db.Mapdata();

            return Ok(mapdata);
        }
    }
}