using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlumnosController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAlumnos()
        {
            var alumnos = new[]
            {
                new { Id = 1, Nombre = "Miguel", Apellido = "Barrientos" },
                new { Id = 2, Nombre = "Luis", Apellido = "Eslava" },
                new { Id = 3, Nombre = "Adrian", Apellido = "Guevara" },
                new { Id = 4, Nombre = "Aylin", Apellido = "Juarez" },
                new { Id = 5, Nombre = "Esthiven", Apellido = "Pinzon" }
            };
            return Ok(alumnos);
        }
    }
}