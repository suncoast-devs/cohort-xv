using System;

namespace BlogApi.Models
{
  public class Comment
  {
    public int Id { get; set; }
    public string Body { get; set; }
    public string Author { get; set; }
    public DateTime DatePosted { get; set; } = DateTime.Now;
  }
}