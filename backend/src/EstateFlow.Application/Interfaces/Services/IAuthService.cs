using EstateFlow.Application.DTOs.Auth;

namespace EstateFlow.Application.Interfaces.Services;

public interface IAuthService
{
    Task<LoginResponseDto?> LoginAsync(LoginRequestDto request);
}