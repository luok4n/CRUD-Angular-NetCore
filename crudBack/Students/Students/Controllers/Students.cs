using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Students.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentsController : ControllerBase
    {
        
        public StudentsController()
        {
        }

        
        [HttpGet]
        public IEnumerable<Student> Get()
        {

            Random rnd = new Random();
            return Enumerable.Range(1, 5).Select(index => new Student
            {
                Id = index,
                Username = Method2(8),
                FirstName = Method2(8),
                LastName = Method2(8),
                Age = rnd.Next(18, 50),
                Career = Method2(8)
            })
            .ToArray();
        }

        [HttpGet("{id}")]
        public Student Get(int id)
        {

            Random rnd = new Random();
            return new Student
            {
                Id = id,
                Username = Method2(8),
                FirstName = Method2(8),
                LastName = Method2(8),
                Age = rnd.Next(18, 50),
                Career = Method2(8)
            };
        }

        [HttpDelete("{id}")]
        public ActionResult<Student> Delete(int id)
        {
            try
            {
                Random rnd = new Random();
                return new Student
                {
                    Id = id,
                    Username = Method2(8),
                    FirstName = Method2(8),
                    LastName = Method2(8),
                    Age = rnd.Next(18, 50),
                    Career = Method2(8)
                };
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error deleting data");
            }
        }

        [HttpPut("{id:int}")]
        public ActionResult<Student> Update(int id, Student student)
        {

            try
            {
                return student;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating data");
            }
        }

        [HttpPost]
        public ActionResult<Student> Create(Student student)
        {
            try
            {
                return student;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error creating data");
            }
        }


            public static string Method2(int length)
        {
            Random random = new Random();
            const string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(characters, length).Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
