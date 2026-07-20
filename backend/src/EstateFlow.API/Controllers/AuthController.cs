using EstateFlow.Application.DTOs.Auth;
using EstateFlow.Application.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace EstateFlow.API.Controllers;

[ApiController]
[Route("api/[controller]")]

public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginAsync(LoginRequestDto request)
    {
        var result = await _authService.LoginAsync(request);

        if (result == null)
        {
            return Unauthorized(new
            {
                message = "Invalid Email or Password"
            }
            );
        }
        return Ok(result);
    }
}
