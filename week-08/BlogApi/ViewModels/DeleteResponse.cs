using BlogApi.Models;

namespace BlogApi.ViewModels
{
  public class DeleteResponse
  {
    public string Message { get; set; } = "Successfully Deleted blog";
    public Blog Blog { get; set; }
  }
}