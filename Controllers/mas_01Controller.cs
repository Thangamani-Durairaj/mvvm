using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using acad.Models;

namespace acad.Controllers
{
    public class MasTypeController : ApiController
    {
        private acadModel db = new acadModel();

        // GET: api/MasType
        public IQueryable<MasType> GetMasType()
        {
            int modid=0, masid = 0;
            object[] param = { new System.Data.SqlClient.SqlParameter("modid", modid),
                               new System.Data.SqlClient.SqlParameter("masid", masid)
            };

            db.Database.CommandTimeout = 3600;
            List<MasType> objMasType = db.Database.SqlQuery<MasType>("spGetMasType @modid,@masid", param).ToList();

            return objMasType.AsQueryable();
        }
        
        // GET: api/MasType/1
        public IQueryable<MasType> GetMasType(int mod,int id)
        {
            object[] param = { new System.Data.SqlClient.SqlParameter("modid", mod),
                               new System.Data.SqlClient.SqlParameter("masid", id)
            };

            db.Database.CommandTimeout = 3600;
            List<MasType> objMasType = db.Database.SqlQuery<MasType>("spGetMasType @modid,@masid", param).ToList();

            return objMasType.AsQueryable();
        }

        // POST: api/MasType
        public int PostMasType([FromBody] MasType mastype)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return 0;
                }

                object[] param = { new System.Data.SqlClient.SqlParameter("masid", mastype.id),
                               new System.Data.SqlClient.SqlParameter("typeid", mastype.typeid),
                               new System.Data.SqlClient.SqlParameter("title", mastype.title),
                               new System.Data.SqlClient.SqlParameter("desc", mastype.desc),
                               new System.Data.SqlClient.SqlParameter("isactive", mastype.isactive) };

                db.Database.CommandTimeout = 600;
                return db.Database.ExecuteSqlCommand("spIuMasType @masid,@typeid,@title,@desc,@isactive", param);
            }
            catch { return 0; }
            finally {  }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}