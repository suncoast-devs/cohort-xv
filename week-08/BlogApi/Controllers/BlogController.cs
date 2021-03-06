using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using blogapi;
using BlogApi.Models;
using BlogApi.ViewModels;
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
    public async Task<ActionResult<Blog>> CreateEntry([FromBody]Blog entry)
    {
      // 2. do the thing 
      await context.Blogs.AddAsync(entry);
      // 3. save the thing
      await context.SaveChangesAsync();
      return entry;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Blog>>> GetAllBlogs()
    {
      // 2. do the thing
      var blogs = context.Blogs.OrderByDescending(blog => blog.DateCreated);

      // 3. return the thing
      return await blogs.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult> GetOneBlog(int id)
    {
      // 2. Do the thing 
      var blog = await context.Blogs.FirstOrDefaultAsync(b => b.Id == id);
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
        return Ok(new DeleteResponse { Blog = blog });
      }
    }

    [HttpPost("{blogId}/comments")]
    public ActionResult<Comment> CreateComment(int blogId, [FromBody]Comment comment)
    {
      // check if the blog exists
      var blog = context.Blogs.FirstOrDefault(f => f.Id == blogId);
      if (blog == null)
      {
        return NotFound();
      }
      else
      {
        comment.BlogId = blogId;
        context.Comments.Add(comment);
        context.SaveChanges();
        return Ok(new
        {

        });
      }
    }
  }
}