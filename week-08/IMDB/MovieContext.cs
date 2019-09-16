using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace IMDB
{
  public partial class MovieContext : DbContext
  {
    public MovieContext()
    {
    }

    public MovieContext(DbContextOptions<MovieContext> options)
        : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql("server=localhost;database=ImdbMovieDb");
      }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");
    }

    // public DbSet<TableSchema> TableName {get;set;}
    public DbSet<Movie> Movies { get; set; }
    // public DbSet<Actor> Actors {get;set;}
  }
}
