using EstateFlow.Application.DTOs.Auth;
using EstateFlow.Application.Interfaces.Services;
using EstateFlow.Infrastructure.Persistence;

namespace EstateFlow.Infrastructure.Services;


public class AuthService : IAuthService
{
    private readonly AppDbContext _context;
    private readonly IJwtService _jwtService;

    public AuthService(AppDbContext context, IJwtService jwtService)
    {
        _context = context;
        _jwtService = jwtService;
    }
    public async Task<LoginResponseDto?> LoginAsync(LoginRequestDto request)
    {

        var user = _context.Users.FirstOrDefault(x => x.Email == request.Email);

        if(user == null)
        {
            return null;
        }
        if(!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
        {
            return null;
        }
        
        var token = _jwtService.GenerateToken(
            user.Id,
            user.FullName,
            user.Email,
            user.Role
        );

        return new LoginResponseDto
        {
            Token = token,
            FullName = user.FullName,
            Email = user.Email,
            Role = user.Role
        };
    }
}