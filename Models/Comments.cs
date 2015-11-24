using System;

namespace NandosoWebsite.Models
{
    public class Comments
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Feedback { get; set; }
        public DateTime CommentDate { get; set; }

    }
}