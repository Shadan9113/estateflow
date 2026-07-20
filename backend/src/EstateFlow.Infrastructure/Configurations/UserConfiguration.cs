using EstateFlow.Domain.Entities.User;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EstateFlow.Infrastructure.Persistence.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.FullName)
               .IsRequired()
               .HasMaxLength(100);

        builder.Property(x => x.Email)
               .IsRequired()
               .HasMaxLength(150);

        builder.HasIndex(x => x.Email)
               .IsUnique();

        builder.Property(x => x.PasswordHash)
               .IsRequired();

        builder.Property(x => x.Role)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(x => x.IsActive)
               .HasColumnName("isActive")
               .IsRequired();

        builder.Property(x => x.CreatedAt)
               .IsRequired();
    }
}