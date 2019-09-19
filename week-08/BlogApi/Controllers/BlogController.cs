using System.Collections.Generic;
using System.Linq;
using blogapi;
using BlogApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlogApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BlogController : ControllerBase
  {

    private DatabaseContext context;

    public BlogController(DatabaseContext _context)
    {
      this.context = _context;
    }

    [HttpPost]
    public ActionResult<Blog> CreateEntry([FromBody]Blog entry)
    {
      // 2. do the thing 
      context.Blogs.Add(entry);
      // 3. save the thing
      context.SaveChanges();
      return entry;

    }

    [HttpGet]
    public ActionResult<IEnumerable<Blog>> GetAllBlogs()
    {
      // 2. do the thing
      var blogs = context.Blogs.OrderByDescending(blog => blog.DateCreated);

      // 3. return the thing
      return blogs.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult GetOneBlog(int id)
    {
      // 2. Do the thing 
      var blog = context.Blogs.FirstOrDefault(b => b.Id == id);
      // 3. return the thing
      if (blog == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(blog);
      }
    }

    [HttpPut("{id}")]
    public ActionResult<Blog> UpdateBlog(int id, [FromBody]Blog newDetails)
    {
      if (id != newDetails.Id)
      {
        return BadRequest();
      }


      context.Entry(newDetails).State = EntityState.Modified;
      context.SaveChanges();
      return newDetails;

      // context.Blogs.Update(newDetails);
      // context.SaveChanges();
      // return newDetails;
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteBlog(int id)
    {
      var blog = context.Blogs.FirstOrDefault(f => f.Id == id);
      if (blog == null)
      {
        return NotFound();
      }
      else
      {
        context.Blogs.Remove(blog);
        context.SaveChanges();
        return Ok(new { Message = "Blog was successfully delete", Blog = blog });
      }

    }


  }
}