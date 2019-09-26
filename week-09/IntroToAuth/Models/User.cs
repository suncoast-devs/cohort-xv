using System;

namespace IntroToAuth.Models
{
  public class User
  {
    public int Id { get; set; }
    public string Email { get; set; }
    public string HashedPassword { get; set; }
    public DateTime DateSignedUp { get; set; } = DateTime.Now;
    public DateTime LastLoggedInAt { get; set; } = DateTime.Now;
  }
}