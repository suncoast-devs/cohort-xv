using System;

namespace OrmReview
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");

      // 1. reference the database
      var context = new MovieContext();
      // 2. do the thing
      var matrix = new Movie
      {
        Name = "The Matrix",
        Tagline = "Woah!"
      };

      var jp = new Movie
      {
        Name = "Jurassic Park",
        Tagline = "Dinosaurs!"
      };
      context.Movies.Add(matrix);
      context.Movies.Add(jp);

      // 3. Save the thing
      context.SaveChanges();
    }
  }
}
