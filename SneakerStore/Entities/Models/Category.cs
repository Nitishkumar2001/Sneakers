using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SneakerStore.Entities.Models
{
    public class Category
    {
        
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public virtual List<Product> Products { get; set; }

    }
}
