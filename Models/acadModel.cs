namespace acad.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class acadModel : DbContext
    {
        public acadModel()
            : base("name=acadCon")
        {
        }

        public virtual DbSet<mas_01> mas_01 { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<mas_01>()
                .Property(e => e.title)
                .IsUnicode(false);

            modelBuilder.Entity<mas_01>()
                .Property(e => e.desc)
                .IsUnicode(false);
        }
    }
}
