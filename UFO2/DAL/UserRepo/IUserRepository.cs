using System.Collections.Generic;
using System.Threading.Tasks;
using UFO.Model;

namespace UFO.DAL
{
    public interface IUserRepository
    {
      
        
        Task<bool> LoggInn(User user);
        Task<bool> AddUser(User newUser);
    }
}
