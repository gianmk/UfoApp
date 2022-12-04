using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace UFO.DAL
{
    public class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<UfoContext>();
                context.Database.EnsureCreated();
                context.Database.EnsureDeleted();

                context.SaveChanges();
            }
        }
    }
}
