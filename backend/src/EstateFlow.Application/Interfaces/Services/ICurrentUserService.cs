namespace EstateFlow.Application.Interfaces.Services;


public interface ICurrentUserService
{
     Guid? GetUserId();

     string? GetFullName();
     string? GetEmail();

     string? GetRole(); 
}