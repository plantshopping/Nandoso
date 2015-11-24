using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Data.Entity.Migrations;

namespace NandosoWebsite.Models
{
    public class NandosoWebsiteContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public NandosoWebsiteContext() : base("name=NandosoWebsiteContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoWebsiteContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<NandosoWebsite.Models.Comments> Comments { get; set; }

        public class MyConfiguration : DbMigrationsConfiguration<NandosoWebsiteContext>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(NandosoWebsiteContext context)
            {
                var comments = new List<Comments>
            {
                new Comments {
                    Name = "Carson Alexander",
                    Email = "Carson@hotmail.com",
                    Feedback = "Love their chicken",
                    CommentDate = DateTime.Parse("2010-09-01")
                },
                new Comments {
                    Name = "Meredith Alonso",
                    Email = "Meredith@hotmail.com",
                    Feedback = "Bad customer service",
                    CommentDate = DateTime.Parse("2012-09-01")
                },
               };
               comments.ForEach(s => context.Comments.AddOrUpdate(p => p.Feedback, s));
                context.SaveChanges();
            }

        }

    }
}
