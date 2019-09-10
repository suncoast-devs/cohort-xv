using System;

namespace ArraysAndObjects
{
  public class Weight
  {
    // brand 
    public string Brand { get; set; } = "Golds Gym";
    // weight
    public int WeightInPounds { get; set; }
    // isRacked
    public bool IsRacked { get; set; } = true;
    // color
    public string Color { get; set; }
    // diameter

    public Weight()
    {
      Console.WriteLine("default ctor");
    }

    public Weight(string brand, string color)
    {
      this.Brand = brand;
      this.Color = color;
    }


    public Weight(int weightInPounds)
    {
      Console.WriteLine("Creating a Weight");
      this.WeightInPounds = weightInPounds;
    }

    public double Diameter { get; set; }

    // functionality
    // Rack()
    public void RackWeight()
    {
      this.IsRacked = true;
      this.CantSeeMe();
    }
    // GetWeightInKilograms()
    public double GetWeightInKilograms()
    {
      return this.WeightInPounds * 2.2;
    }
    private void CantSeeMe()
    {
      Console.WriteLine("Can not see me");
    }

    public void SprayPaintWeights(string newColor)
    {
      this.Color = newColor;
    }

  }

}