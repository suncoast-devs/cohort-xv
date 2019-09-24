using System.Collections.Generic;

namespace HomeworkReview.Models
{
  public class Location
  {
    public int Id { get; set; }
    public string Address { get; set; }
    public string ManagerName { get; set; }
    public string PhoneNumber { get; set; }

    public List<ShopItem> ShopItems { get; set; } = new List<ShopItem>();
  }
}