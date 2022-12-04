using System.Collections.Generic;
using System.Threading.Tasks;
using UFO.Model;

namespace UFO.DAL
{
    public interface ICddRepository
    {
  
        Task<List<Countries>> GetCountries();
        Task<List<States>> GetStates(string name);
   
        
    }
}
