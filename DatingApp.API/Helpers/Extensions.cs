
using System;
using Microsoft.AspNetCore.Http;


namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationsError(this HttpResponse response, string message)
        {            
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-allow-Origin", "*");
        }
        public static int AgeCalculate(this DateTime theDatetime)
        {
           
           var age =  DateTime.Today.Year - theDatetime.Year ;  

           if (theDatetime.AddYears(age) > DateTime.Today)
           age--;     

            return age;

        }
    }
}