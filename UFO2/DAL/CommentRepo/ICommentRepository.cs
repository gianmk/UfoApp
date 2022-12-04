using System.Collections.Generic;
using System.Threading.Tasks;
using UFO.Model;

namespace UFO.DAL
{
    public interface ICommentRepository
    {
        
        Task<List<Comments>> GetComments(int id);
        Task<bool> RegisterComment(Comment comment);
        Task<bool> DeleteComment(int id);
        Task<bool> LikeComment(int id);
        Task<bool> DislikeComment(int id);
        
    }
}
