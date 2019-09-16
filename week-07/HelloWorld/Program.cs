using System;

namespace HelloWorld
{
  class Program
  {

    //    SayHello, takes a name, prints Hello, name
    static void SayHello(string name)
    {
      Console.WriteLine($"Hello for strings, {name}");
    }

    static void SayHello(int number)
    {
      Console.WriteLine($"Hello for numbers, {number}");
    }

    static void SayHello(int number, string name)
    {

    }

    static double Sum(double x, double y)
    {
      return x + y;
    }

    static void Main(string[] args)
    {



      Console.WriteLine("Hello World!");
      Console.WriteLine(Math.Pow(0, 0));


      Console.WriteLine("Hello XV");

      // variables
      // const name = "Billy"
      string name = "Billy";
      Console.WriteLine(name);
      // let counter = 0;
      int counter = 0;
      /*
        int : a whole number from -2,147,483,648 to 2,147,483,64
        long : a whole number from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
        double : a 64 bit floating point value that has an approximate precision of ~15-17 digits
        float : a 32 bit floating point value that has an approximate precision of 6-9 digits
        decimal : a more precise way to store decimal numbers, but has a smaller range
        char : represents a unicode character
        bool : true or false
        byte : represents a raw chunk of data
       */

      //   double pi = 3.14;
      var pi = "strawberry"; // this is a string now

      // string concat
      var firstName = "Sherlock";
      var lastName = "Holmes";
      var fullname = firstName + " " + lastName;

      var fullNameWithInterpolation = $"{firstName} {lastName}";
      // string to int 
      var input = "10";
      var score = int.Parse(input);
      // int to string
      var backToString = score.ToString();
      // ternaires/conditionals
      if (score > 10 && name == "Billy")
      {
        Console.WriteLine("You won!");
      }
      else if (score < 10 && name == "Mandy")
      {
        Console.WriteLine("You lost");
      }
      else
      {
        Console.WriteLine("Grim.....");
      }

      var didWin = score > 10 ? "Yes" : "No";

      // loops, for, foreach, 
      for (var i = 0.0; i < 10; i++)
      {
        Console.WriteLine(i);
      }

      // functions?
      SayHello("Mandy");
      SayHello(name);
      SayHello(1234);
      SayHello("Grimm3322");
      SayHello(3322);
      // arrays
      // array of arrays
      // classes/objects
      // map, while, reduce filter
      // data structures
      // promises

      // errors
      // fetch/axios (post)
      // packages/import
    }
  }
}
