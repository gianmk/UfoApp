using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using System.Collections.Generic;
using System.Threading.Tasks;
using UFO.DAL;
using UFO.Model;

namespace UFO2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        
            private readonly ICommentRepository _db;
            private ILogger<CommentController> _log;
            private const string _loggIn = "loggIn";

            public CommentController(ICommentRepository db, ILogger<CommentController> log)
            {
                _db = db;
                _log = log;
            }
            private bool ValidSession()
            {
                return !string.IsNullOrEmpty(HttpContext.Session.GetString(_loggIn));
            }
           

         

            [HttpGet("GetComment/{id}")]
            public async Task<ActionResult> GetComments(int id)
            {
                List<Comments> comments = await _db.GetComments(id);
            if (comments == null)
            {
                _log.LogInformation("Table in database is empty");
                return NotFound("not found");
            }
            return Ok(comments);

           
            }

            [HttpPost("regComment")]
            public async Task<ActionResult> RegisterComment(Comment innComment)
            {
            if (!ValidSession()) return Unauthorized("Unauthorized, please log in");
            if (ModelState.IsValid)
                {
                    bool ok = await _db.RegisterComment(innComment);
                    if (!ok)
                    {
                        _log.LogInformation("Comment could not be saved");
                        return BadRequest("Comment could not be saved");
                    }
                    return Ok(new {message = "comment added"});
                }

                _log.LogInformation("Feil i inputvalidering");
                return BadRequest("Feil i inputvalidering");


            }

            [HttpDelete("DeleteComment/{id}")]
            public async Task<ActionResult> DeleteComment(int id)
            {
            if (!ValidSession()) return Unauthorized("Unauthorized, please log in");
            bool ok = await _db.DeleteComment(id);

                if (!ok)
                {
                return NotFound("Ikke lagret");
                }
                return Ok(new { message = "comment deleted"});
            }
            [HttpGet("LikeComment/{id}")]
            public async Task<ActionResult> LikeComment(int id)
            {
            if (!ValidSession()) return Unauthorized("Unauthorized, please log in");
            bool returnOk = await _db.LikeComment(id);
                if (!returnOk)
                {
                    _log.LogInformation("could not like comment");
                    return BadRequest("could not like comment");
                }
                return Ok(new { message = "like ok" });
            }

            [HttpGet("DislikeComment/{id}")]
            public async Task<ActionResult> DislikeComment(int id)
            {
            if (!ValidSession()) return Unauthorized("Unauthorized, please log in");
            bool returnOk = await _db.DislikeComment(id);
                if (!returnOk)
                {
                    _log.LogInformation("could not like comment");
                    return BadRequest("could not like comment");
                }
                return Ok(new { message = "dislike ok" });
            }
    
}
}
