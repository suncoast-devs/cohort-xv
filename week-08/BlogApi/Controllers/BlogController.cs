using System.Collections.Generic;
using System.Linq;
using blogapi;
using BlogApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace BlogApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BlogController : ControllerBase
  {

    [HttpPost]
    public ActionResult<Blog> CreateEntry([FromBody]Blog entry)
    {
      // add entry to the database
      // 1. reference the database
      var context = new DatabaseContext();
      // 2. do the thing 
      context.Blogs.Add(entry);
      // 3. save the thing
      context.SaveChanges();
      return entry;

    }

    [HttpGet]
    public ActionResult<IEnumerable<Blog>> GetAllBlogs()
    {
      // 1. reference the database 
      var context = new DatabaseContext();
      // 2. do the thing
      var blogs = context.Blogs.OrderByDescending(blog => blog.DateCreated);

      // 3. return the thing
      return blogs.ToList();
    }

  }
}