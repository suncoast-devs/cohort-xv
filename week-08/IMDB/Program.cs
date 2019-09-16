using System;
using System.Linq;

namespace IMDB
{
  class Program
  {

    static void CreateData()
    {
      // create a bunch of movies 
      // 1. Reference the database
      var db = new MovieContext();
      // 2. Do the thing
      // create a new movie
      var favoriteMovie = new Movie
      {
        Title = "Jaws"
      };
      db.Movies.Add(favoriteMovie);
      // 3. Save the thing
      db.SaveChanges();


    }


    static void ReadData()
    {
      // 1. Reference the database
      var db = new MovieContext();
      // 2. Do the thing you wanna do
      var allTheTitles = db.Movies
        .Where(movie => movie.ReleasedDate.Year == 1988)
        .Select(movie => movie.Title);
      /*
        a whole bunch of stuff here.....
      
       */
      Console.WriteLine(allTheTitles.First());


    }
    static void UpdateData()
    {

      // 1. Reference the database
      var db = new MovieContext();
      // 2. find the thing you want to update
      var movieToUpdate = db.Movies.FirstOrDefault(movie => movie.Title == "Jaws");
      // 3. Update the thing
      movieToUpdate.Tagline = "You're gonna need a bigger boat";
      movieToUpdate.Budget = 100000;
      // 4. Save the updates
      db.SaveChanges();

    }
    static void DeleteData()
    {
      // 1. Reference the database
      var db = new MovieContext();
      // 2. find the the thing
      var movieToDelete = db.Movies.FirstOrDefault(movie => movie.Title == "Jaws");
      // 3. Delete the thing
      db.Movies.Remove(movieToDelete);
      // 4. Save the changes
      db.SaveChanges();
    }


    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
      CreateData();
    }
  }
}
