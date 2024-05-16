using System.ComponentModel.DataAnnotations;

namespace SneakerStore.Entities.Dto.AdminDto
{
    public class LoginAdminDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
