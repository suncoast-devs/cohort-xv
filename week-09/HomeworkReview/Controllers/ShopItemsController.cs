using System.Collections.Generic;
using System.Linq;
using homeworkreview;
using HomeworkReview.Models;
using Microsoft.AspNetCore.Mvc;

namespace HomeworkReview.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ShopItemsController : ControllerBase
  {

    private DatabaseContext context;

    public ShopItemsController(DatabaseContext _context)
    {
      this.context = _context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<ShopItem>> GetAll()
    {
      return context.ShopItems.OrderBy(o => o.Name).ToList();
    }

    [HttpPost]
    public ActionResult<ShopItem> CreateShopItem([FromBody] ShopItem item)
    {
      context.ShopItems.Add(item);
      context.SaveChanges();
      return item;
    }
  }
}