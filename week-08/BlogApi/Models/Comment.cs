using System;

namespace BlogApi.Models
{
  public class Comment
  {
    public int Id { get; set; }
    public string Content { get; set; }
    public string Author { get; set; }
    public DateTime DatePosted { get; set; } = DateTime.Now;
    public int OhSnaps { get; set; }

    // public int UnicornId{get;set;}
    public int BlogId { get; set; }

    // public ModelName Unicorn{get;set;}
    public Blog Blog { get; set; }

  }
}