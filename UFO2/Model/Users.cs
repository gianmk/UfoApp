using System.ComponentModel.DataAnnotations;

namespace UFO.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. \-]{6,30}")]
        public string Username { get; set; }

        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. \-]{6,30}")]
        public string Password { get; set; }

    }
}