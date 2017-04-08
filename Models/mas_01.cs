namespace acad.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class mas_01
    {
        public Guid? id { get; set; }

        [Key]
        public int masid { get; set; }

        public byte? typeid { get; set; }

        public byte? linkid { get; set; }

        public byte? verno { get; set; }

        [Required]
        [StringLength(300)]
        public string title { get; set; }

        [StringLength(500)]
        public string desc { get; set; }

        public DateTime? modified { get; set; }

        public bool? isactive { get; set; }

        public bool? isdelete { get; set; }
    }
}
