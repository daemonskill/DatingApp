namespace DatingApp.API.Dtos
{
    public class UserForLoginDtos
    {
        //[Required]
        public string Username { get; set; }
        //[Required]
        //[StringLength(8,MinimumLength = 4, ErrorMessage="Password Between 4 and 8 characters")]
        public string Password { get; set; }
    }
   
}
