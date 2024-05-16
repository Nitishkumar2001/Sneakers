using Microsoft.AspNetCore.Mvc;
using SneakerStore.Entities.Dto.CategoryDto;
using SneakerStore.Entities.Dto.OrdersDto;
using SneakerStore.Entities.Dto.ProductDto;
using SneakerStore.Entities.Dto.UserDto;
using SneakerStore.Entities.Models;

namespace SneakerStore.Repository.Interfaces
{
    public interface IUserRepository
    {

        Task<RegisterUserDto> Register(RegisterUserDto registeruserdto);

        Task<string> Login(LoginUserDto loginUserDto);

        Task<IEnumerable<ResponseProductDto>> GetAllProducts();
        Task<IEnumerable<ResponseProductDto>> GetProductsByCategory(int categoryId);
        Task<List<CategoryDto>> GetCategories();
        Task<IEnumerable<ResponseProductDto>> SearchByBrand(string brandName);
        Task<RegisterUserDto> UpdateUser(int Id, RegisterUserDto user);
        Task<string> CheckOut(string userEmail);
        Task<IEnumerable<OrderItemDto>> GetOrdersByUserId(string userEmail);


    }
}
