namespace EstateFlow.Application.Interfaces.Services;

public interface IJwtService
{
    string GenerateToken(Guid userId, string fullName, string email, string role);
}