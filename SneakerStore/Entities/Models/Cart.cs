using System.ComponentModel.DataAnnotations.Schema;

namespace SneakerStore.Entities.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public List<CartItem> Items { get; set; }
    }


}
