using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Data;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }
        [HttpPost("register")] 
         public async Task<IActionResult> Register(UserForRegisterDtos userForRegisterDtos)
         {
             // Validate Request
             userForRegisterDtos.Username = userForRegisterDtos.Username.ToLower();

             if (await _repo.UserExists(userForRegisterDtos.Username))
             return BadRequest ("User already Exist");

             var UserToCreate = new User{
                 Username=userForRegisterDtos.Username
             };

             await _repo.Register(UserToCreate, userForRegisterDtos.Password);
             return StatusCode(201);
         }
         [HttpPost("login")]
         public async Task<IActionResult> Login(UserForLoginDtos userForLoginDtos)
            {
                var userFromrepo = await _repo.Login(userForLoginDtos.Username.ToLower(), userForLoginDtos.Password);
                if(userFromrepo==null)
                return Unauthorized();
                
                var claims = new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userFromrepo.Id.ToString()),
                    new Claim(ClaimTypes.Name, userFromrepo.Username )
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.Now.AddDays(1),
                    SigningCredentials = creds
                }; 

                var tokenHandler = new JwtSecurityTokenHandler();

                var token = tokenHandler.CreateToken(tokenDescriptor);
                return Ok(new {
                    token = tokenHandler.WriteToken(token)                   
                });
            }
    }
}