using System;
using System.ComponentModel.DataAnnotations;
using UFO.DAL;

namespace UFO.Model
{
    public class Ufo
    {
        [Key]
        public int Id { get; set; }
        public string Summary { get; set; }
        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. ()-]{1,50}")]
        public string Country { get; set; }
        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. \-]{1,50}")]
        public string State { get; set; }
        [RegularExpression(@"[0-9. \ .:-]{1,50}")]
        public string Date_time { get; set; }
        [RegularExpression(@"[a-zA-ZæøåÆØÅ. \-]{1,50}")]        
        public string Shape { get; set; }
        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. \-]{1,50}")]       
        public string Duration { get; set; }        
        public string Stats { get; set; }
        public string Report_link { get; set; }
        [Required]
        public string Text { get; set; }
        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. \-]{1,50}")]
        public string Location { get; set; }
        [RegularExpression(@"[0-9. \ .:-]{1,50}")]
        public string Time { get; set; }
        public string Posted { get; set; }
        public string City_latitude { get; set; }
        public string City_longitude { get; set; }
        public string City_location { get; set; }
        public int commentcount { get; set; }

        public static implicit operator Ufo(Ufoer v)
        {
            throw new NotImplementedException();
        }
    }

    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public int UfoId { get; set; }
        [Required]
        
        public string Comments { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
    }
}
