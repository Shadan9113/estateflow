using EstateFlow.Domain.Entities.User;
using EstateFlow.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace EstateFlow.Infrastructure.Services;

public class DatabaseInitializer
{
    private readonly AppDbContext _context;

    public DatabaseInitializer(AppDbContext context)
    {
        _context = context;
    }

    public async Task InitializeAsync()
    {
        if( await _context.Users.AnyAsync(x => x.Role == "SuperAdmin"))
        {
            return;
        }

        var SuperAdmin = new User
        {
            Id = Guid.NewGuid(),
            FullName = "System Administrator",
            Email = "admin@estateflow.com",
            PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin@123"),
            Role = "SuperAdmin",
            IsActive = true,
            CreatedAt = DateTime.UtcNow
        };

        _context.Users.Add(SuperAdmin);
        await _context.SaveChangesAsync();
    }
}