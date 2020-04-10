using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Model;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Threading.Tasks;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;

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
                var userFromrepo = await _repo.Login(userForLoginDtos.Username, userForLoginDtos.Password);
                if(userFromrepo==null)
                return unauthorized();
                
                var claims = new[]
                {
                    new claims(claimst )
                }
            }
    }
}