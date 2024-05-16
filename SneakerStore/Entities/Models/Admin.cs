using System.ComponentModel.DataAnnotations;

namespace SneakerStore.Entities.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

    }
}
