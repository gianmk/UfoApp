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

namespace UFO.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _db;
        private ILogger<UserController> _log;
        private const string _loggIn = "loggIn";

        public UserController(IUserRepository db, ILogger<UserController> log)
        {
            _db = db;
            _log = log;
        }
         private bool ValidSession()
        {
            return !string.IsNullOrEmpty(HttpContext.Session.GetString(_loggIn));
        }
       

        [HttpPost("LoggIn")]
        public async Task<ActionResult> LoggIn(User user)
        {
            if (ModelState.IsValid)
            {
                bool returnOK = await _db.LoggInn(user);
                if (!returnOK)
                {
                    _log.LogInformation("Innloggingen feilet for bruker");
                    HttpContext.Session.SetString(_loggIn, "");
                    return Ok(false);
                }
                HttpContext.Session.SetString(_loggIn, "LoggetInn");
                return Ok(new {message="logged in"});
            }
            _log.LogInformation("Validation error");
            return BadRequest("Validation error");
        }

        [HttpPost("AddUser")]
        public async Task<ActionResult> AddUser(User user)
        {
            if (ModelState.IsValid)
            {
                
                bool ok = await _db.AddUser(user);

                if (!ok)
                {
                    _log.LogInformation("Error register");
                    return Ok(false);
                }
                return Ok(new{ status='1'});
            }
            _log.LogInformation("Registration error");
            return BadRequest("Registration error");
        }

        [HttpGet("LogOut")]
        public void LogOut()
        {
            HttpContext.Session.SetString(_loggIn, "");
        }

    }
}