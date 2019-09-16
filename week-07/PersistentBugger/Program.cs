using System;

namespace PersistentBugger
{
  class Program
  {


    public static int Persistence(int n)
    {
      var numbers = n.ToString().ToCharArray();
      var x = 'a';
      var y = 'A';
      var z = '1';
      var p = '0';

      return n;
    }

    static void Main(string[] args)
    {
      Console.WriteLine(Persistence(999));
    }
  }
}
