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
    public class CommentRepository : ICommentRepository
    {
        private readonly UfoContext _db;

        public CommentRepository(UfoContext db)
        {
            _db = db;
        }


        public async Task<List<Comments>> GetComments(int id)
        {
            try
            {
                List<Comments> comments = await _db.Comments.Where(c => c.UfoId == id).ToListAsync();

                return comments;

            }
            catch { return null; }
        }

        public async Task<bool> RegisterComment(Comment innComment)
        {
            try
            {
                Comments reg = new Comments();

                reg.Comment = innComment.Comments;
                reg.UfoId = innComment.UfoId;

                _db.Comments.Add(reg);

                Ufoer incrementUfo = await _db.Ufoer.FindAsync(innComment.UfoId);
                incrementUfo.commentcount++;
                await _db.SaveChangesAsync();

                return true;

            }
            catch { return false; }
        }

        public async Task<bool> DeleteComment(int id)
        {
            try
            {
                Comments comment = await _db.Comments.FindAsync(id);
                _db.Comments.Remove(comment);
                Ufoer decrementUfo = await _db.Ufoer.FindAsync(comment.UfoId);
                decrementUfo.commentcount--;

                await _db.SaveChangesAsync();
                return true;
            }
            catch { return false; }
        }
       
      
        public async Task<bool> LikeComment(int id)
        {
            try
            {
                Comments comment = await _db.Comments.FindAsync(id);
                comment.Likes += 1;

                await _db.SaveChangesAsync();
                return true;
            }
            catch { return false; }
        }

        public async Task<bool> DislikeComment(int id)
        {
            try
            {
                Comments comment = await _db.Comments.FindAsync(id);
                comment.Dislikes += 1;

                await _db.SaveChangesAsync();
                return true;
            }
            catch { return false; }


        }

    
        
    }
}

