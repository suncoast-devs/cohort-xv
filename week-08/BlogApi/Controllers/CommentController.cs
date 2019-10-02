using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogApi.Models;
using blogapi;

namespace dotnet_sdg_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CommentController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public CommentController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Comment
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Comment>>> GetComments()
    {
      _context = new DatabaseContext();
      return await _context.Comments.ToListAsync();
    }

    // GET: api/Comment/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Comment>> GetComment(int id)
    {
      var comment = await _context.Comments.FindAsync(id);

      if (comment == null)
      {
        return NotFound();
      }

      return comment;
    }

    // PUT: api/Comment/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutComment(int id, Comment comment)
    {
      if (id != comment.Id)
      {
        return BadRequest();
      }

      _context.Entry(comment).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CommentExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Comment
    [HttpPost]
    public async Task<ActionResult<Comment>> PostComment(Comment comment)
    {
      _context.Comments.Add(comment);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetComment", new { id = comment.Id }, comment);
    }

    // DELETE: api/Comment/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Comment>> DeleteComment(int id)
    {
      var comment = await _context.Comments.FindAsync(id);
      if (comment == null)
      {
        return NotFound();
      }

      _context.Comments.Remove(comment);
      await _context.SaveChangesAsync();

      return comment;
    }

    private bool CommentExists(int id)
    {
      return _context.Comments.Any(e => e.Id == id);
    }
  }
}
