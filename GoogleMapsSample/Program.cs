using System;
using System.Diagnostics;
using System.IO;
using System.Net.Http;

namespace GoogleMapsSample
{
    /// <summary>
    ///  Downloads a Redmond map from Google Maps, saves it as a local file and opens the default viewer.
    /// </summary>
    class Program
    {
        static string _address = "http://maps.googleapis.com/maps/api/staticmap?center=Austin,Tx&zoom=14&size=400x400&sensor=false";

        static void Main(string[] args)
        {
            GetGoogleMap();

            Console.WriteLine("Exit...");
            Console.ReadLine();
        }

        static async void GetGoogleMap()
        {
            var client = new HttpClient(); 
           
            var response = await client.GetAsync(_address); 
             
            response.EnsureSuccessStatusCode();
             
            using (var fileStream = new FileStream("output.png", FileMode.Create, FileAccess.Write, FileShare.None))
            {
                await response.Content.CopyToAsync(fileStream);
            }

            var process = new Process();
            process.StartInfo.FileName = "output.png";
            process.Start();
        } 
        
    }
}
