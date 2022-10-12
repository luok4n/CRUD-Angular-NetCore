using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Students.utils
{    
    public class dbContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=sample_DB.db3", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Map table names
            modelBuilder.Entity<Student>().ToTable("Student", "test");
            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.FirstName);
                entity.Property(e => e.LastName);
                entity.Property(e => e.Username);
                entity.Property(e => e.Age);
                entity.Property(e => e.Career);
            });
            base.OnModelCreating(modelBuilder);
        }
    }
}
