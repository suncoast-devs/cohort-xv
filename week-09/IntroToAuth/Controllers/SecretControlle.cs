using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IntroToAuth.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class SecretController : ControllerBase
  {

    [HttpGet]
    public ActionResult Secret()
    {
      return Ok(new { Secret = "Tacos are better than burritos" });
    }
  }
}