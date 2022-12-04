using System.Collections.Generic;
using System.Threading.Tasks;
using UFO.DAL;
using UFO.Model;

namespace UFO2.DAL.UfoRepo
{
    public interface IUfoRepository
    {
        Task<List<Ufoer>> GetUfoList();
        Task<bool> Reg(Ufo innUfo);
        Task<bool> Delete(int id);
        Task<Ufoer> GetUfo(int Id);
        Task<bool> Edit(Ufo editUfo);
        Task<List<Ufoer>> SearchUfoSummary(string searchword);
        Task<List<KeyValuePair<string, int>>> Mapdata();
    }
}
