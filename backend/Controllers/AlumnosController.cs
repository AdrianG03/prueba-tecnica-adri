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
                new { Id = 1, Nombre = "Juan", Apellido = "Perez" },
                new { Id = 2, Nombre = "Maria", Apellido = "Gomez" },
                new { Id = 3, Nombre = "Pedro", Apellido = "Lopez" }
            };
            return Ok(alumnos);
        }
    }
}