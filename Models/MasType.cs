namespace acad.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class MasType 
    {
        public int id { get; set; }
        public int typeid { get; set; }
        public string t_title { get; set; }
        public string title { get; set; }
        public string desc { get; set; }
        public bool isactive { get; set; }
        public string active { get; set; }
    }
}
