using System;

namespace HomeworkReview.Models
{
  public class ShopItem
  {
    public int Id { get; set; }
    public int SKU { get; set; }
    public string Name { get; set; }
    public string ShortDescription { get; set; }
    public int NumberinStock { get; set; }
    public int Price { get; set; }
    public DateTime DateOrdered { get; set; }
  }
}