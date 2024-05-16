using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SneakerStore.Entities.Models
{
    public class User
    {
        
        public int Id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }


        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public string Phone { get; set; }

        public string City { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public Cart Cart { get; set; }
        public List<Order> Orders { get; set; }
    }
}
