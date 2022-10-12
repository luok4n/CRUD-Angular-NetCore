using System;
using System.ComponentModel.DataAnnotations;

namespace Students
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(128)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(128)]
        public string LastName { get; set; }
        [Required]
        [MaxLength(128)]
        public string Username { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        [MaxLength(128)]
        public string Career { get; set; }
    }
}
