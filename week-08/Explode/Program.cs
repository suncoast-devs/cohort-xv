using System;
using System.Linq;
namespace Explode
{
  class Program
  {
    // 312
    public static string Explode(string s)
    {
      // Insert your solution here
      /*
      function explode(s) {
      return s.split("").map((a,\) => a.repeat(+a)).join("")
      }
      */

      var x = String.Join("",
       s.Select(
           (letter, i) =>
           String.Join("", Enumerable.Repeat(letter, (int)Char.GetNumericValue(letter)))));

      return x;
    }

    static void Main(string[] args)
    {
      Console.WriteLine(Explode("312"));
    }
  }
}
