﻿using System;
using System.Text.RegularExpressions;
using HomeworkReview.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace homeworkreview
{
  public partial class DatabaseContext : DbContext
  {
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    private string ConvertPostConnectionToConnectionString(string connection)
    {
      var _connection = connection.Replace("postgres://", String.Empty);
      var output = Regex.Split(_connection, ":|@|/");
      return $"server={output[2]};database={output[4]};User Id={output[0]}; password={output[1]}; port={output[3]}";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var envConn = Environment.GetEnvironmentVariable("DATABASE_URL");
        var conn = "server=localhost;database=HomeworkReviewShop";
        if (envConn != null)
        {
          conn = ConvertPostConnectionToConnectionString(envConn);
        }
        optionsBuilder.UseNpgsql(conn);
      }
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");
    }
    public DbSet<ShopItem> ShopItems { get; set; }
    public DbSet<Location> Locations { get; set; }

  }
}
