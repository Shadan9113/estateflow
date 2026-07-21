using System.Security.Claims;
using EstateFlow.Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;

namespace EstateFlow.Infrastructure.Services;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public CurrentUserService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public Guid? GetUserId()
    {
        var userId = _httpContextAccessor.HttpContext?
            .User
            .FindFirst(ClaimTypes.NameIdentifier)?
            .Value;

        return Guid.TryParse(userId, out var id) ? id : null;
    }

    public string? GetFullName()
    {
        return _httpContextAccessor.HttpContext?
               .User
               .FindFirst(ClaimTypes.Name)?
               .Value;
    }
    public string? GetEmail()
    {
        return _httpContextAccessor.HttpContext?
            .User
            .FindFirst(ClaimTypes.Email)?
            .Value;
    }

    public string? GetRole()
    {
        return _httpContextAccessor.HttpContext?
            .User
            .FindFirst(ClaimTypes.Role)?
            .Value;
    }
}