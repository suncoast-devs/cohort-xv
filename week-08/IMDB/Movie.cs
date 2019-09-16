using System;

namespace IMDB
{
  public class Movie
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Tagline { get; set; }
    public DateTime ReleasedDate { get; set; }
    public int Screenings { get; set; }
    public double PricePerTicket { get; set; }
    public double TotalRevenue { get; set; }
    public double Cost { get; set; }
    public double Budget { get; set; }
    public int RottenTomatoesRating { get; set; }
  }
}