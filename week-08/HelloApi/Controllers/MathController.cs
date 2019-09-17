using Microsoft.AspNetCore.Mvc;


namespace helloapi.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class MathController : ControllerBase
  {

    [HttpGet]
    public ActionResult<string> GetMyMaths()
    {
      return "Hello World";
    }

    [HttpGet("{name}")]
    public ActionResult<string> WelcomeMessage(string name)
    {
      return "Hello,  " + name;
    }

    [HttpGet("sum/{x}/{y}")]
    public ActionResult<int> Sum(int x, int y)
    {
      if (x > 10)
      {
        return x * y;
      }
      return x + y;
    }

    [HttpPost("subtract/{x}/{y}")]
    public ActionResult<string> DoThePostThing(string x, string y)
    {

      return (int.Parse(x) - int.Parse(y)).ToString();
    }

  }
}