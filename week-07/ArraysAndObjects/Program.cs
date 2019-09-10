using System;
using System.Collections.Generic;

namespace ArraysAndObjects
{
  class Program
  {
    static void Main(string[] args)
    {
      var length = 24;
      var names = new string[length];
      length++;
      var scores = new int[] { 1, 34, 56, 33, 78 };

      var gameBoard = new int[][] { new int[8], new int[8], new int[8], new int[8], new int[8], };
      var gameBoard2 = new int[8][][];


      var students = new List<string>() { "Stephen", "Nadia", "Mallory", "Nick", "Tristan" };

      Console.WriteLine(students[3]);

      var grades = new List<double>();

      grades.Add(13.3);
      grades.Add(55.2);
      grades.AddRange(new List<double> { 1, 2, 565, 8, 0, 2 });

      Console.WriteLine(grades);

      foreach (var unicorn in grades)
      {
        Console.WriteLine(unicorn);
      }



      var lightWeight = new Weight(5);

      lightWeight.IsRacked = false;
      lightWeight.Color = "black";


      var middleWeight = new Weight();
      var heavyWeight = new Weight(100)
      {
        Color = "Grey",
        IsRacked = true,

      };

      heavyWeight.RackWeight();
      heavyWeight.Color = "Silver";
      //   heavyWeight.CantSeeMe();

      Console.WriteLine(heavyWeight.GetWeightInKilograms());

      var liftingSet = new List<Weight>();

    }
  }
}
