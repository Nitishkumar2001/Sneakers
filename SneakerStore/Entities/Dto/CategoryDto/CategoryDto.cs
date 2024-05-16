using SneakerStore.Entities.Dto.ProductDto;

namespace SneakerStore.Entities.Dto.CategoryDto
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public List<ResponseProductDto> Products { get; set; }
    }
}
