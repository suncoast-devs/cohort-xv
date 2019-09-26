using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using introtoauth;
using IntroToAuth.Models;
using IntroToAuth.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace IntroToAuth.Controllers
{
  [ApiController]
  [Route("auth")]
  public class AuthController : ControllerBase
  {
    private DatabaseContext context;

    public AuthController(DatabaseContext _context)
    {
      this.context = _context;
    }


    // email
    // password


    [HttpPost("register")]
    public ActionResult Register([FromBody] RegisterViewModel userData)
    {
      // check if the user already exists
      var exists = false;
      //   var exists = context.Users.Any(user => user.Email.ToLower() == userData.Email.ToLower());
      if (exists)
      {
        return BadRequest(new { Message = "User with the that email exists" });
      }
      else
      {
        // if is doesn't, create a new user
        var user = new User
        {
          Email = userData.Email
        };
        // hash the password
        var hashedPassword = new PasswordHasher<User>().HashPassword(user, userData.Password);
        // save the new user & hashedpassword
        user.HashedPassword = hashedPassword;
        context.Users.Add(user);
        context.SaveChanges();
        // create the token 
        // define its lifespan
        var expirationTime = DateTime.UtcNow.AddSeconds(259200);
        var payload = new SecurityTokenDescriptor
        {
          Subject = new ClaimsIdentity(new[]{
               new Claim(ClaimTypes.Name, user.Email),
               new Claim("id", user.Id.ToString())
            }),
          Expires = expirationTime,
          SigningCredentials = new SigningCredentials(
              new SymmetricSecurityKey(Encoding.UTF8.GetBytes("REALLY LONG RANDOM STRING THAT IS A THING THAT SUUUUUUPER SECRET")),
              SecurityAlgorithms.HmacSha256Signature
          )

        };
        var tokenGenerator = new JwtSecurityTokenHandler();
        var token = tokenGenerator.WriteToken(tokenGenerator.CreateToken(payload));

        // return the token
        return Ok(new { token = token, user, message = "Hello!" });

      }
    }

  }
}