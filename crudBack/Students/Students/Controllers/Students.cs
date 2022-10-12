using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Students.utils;
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
            using (var context = new dbContext())
            {
                var students = context.Students.OrderBy(s => s.Id).ToList();
                return students;
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Student> Get(int id)
        {
            using (var context = new dbContext())
            {
                var student = context.Students.Where(s => s.Id.Equals(id)).FirstOrDefault();
                if (student == null)
                {
                    return NotFound();
                }
                return student;
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Student> Delete(int? id)
        {
            using (var context = new dbContext())
            {
                if (id == null)
                {
                    return NotFound();
                }

                var student = context.Students.Where(s => s.Id.Equals(id)).FirstOrDefault();
                if (student == null)
                {
                    return NotFound();
                }

                context.Students.Remove(student);
                context.SaveChanges();

                return Ok(student);
            }
        }

        [HttpPut("{id:int}")]
        public ActionResult<Student> Update(int id, Student student)
        {
            using (var context = new dbContext())
            {
                if (id != student.Id)
                {
                    return NotFound();
                }
                try
                {
                    context.Update(student);
                    context.SaveChanges();
                    return student;
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError,
                        "Error updating student");
                }

            }
            
        }

        [HttpPost]
        public ActionResult<Student> Create(Student student)
        {
            using (var context = new dbContext())
            {
                try
                {
                    if (student == null)
                        return BadRequest();

                    var createdStudent = context.Students.Add(student);
                    context.SaveChanges();
                    return Ok(student);
                }
                catch (Exception)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError,
                        "Error creating student");
                }
            }
                
        }

    }
}
