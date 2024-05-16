using Microsoft.AspNetCore.Mvc;
using SneakerStore.Entities.Dto.AdminDto;
using SneakerStore.Entities.Dto.CategoryDto;
using SneakerStore.Entities.Dto.OrdersDto;
using SneakerStore.Entities.Dto.ProductDto;
using SneakerStore.Entities.Models;
using System.Collections;

namespace SneakerStore.Repository.Interfaces
{
    public interface IAdminRepository
    {
        Task<IEnumerable<ResponseProductDto>> GetAllProducts();
        Task<IEnumerable<CategoryDto>> GetAllCategory();
        Task<ResponseProductDto> GetByIdProducts(int id);
        Task<RequestProductDto> AddProducts(RequestProductDto requestProductDto);
        Task<AddCategoryDto> AddCategory(AddCategoryDto addCategoryDto);
        Task<RequestProductDto> UpdateProducts(int id, RequestProductDto product);
        Task<RegisterAdminDto> Register(RegisterAdminDto registerAdminDto);
        Task<string> Login(LoginAdminDto loginAdminDto);
        Task<Product> DeleteProducts(int id);
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetByIdUser(int id);
        Task<IEnumerable> GetAllOrders();
    }
}
