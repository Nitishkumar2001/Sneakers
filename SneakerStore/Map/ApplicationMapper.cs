using AutoMapper;
using SneakerStore.Entities.Dto.AdminDto;
using SneakerStore.Entities.Dto.CartItemDto;
using SneakerStore.Entities.Dto.CategoryDto;
using SneakerStore.Entities.Dto.ProductDto;
using SneakerStore.Entities.Dto.UserDto;
using SneakerStore.Entities.Models;

namespace SneakerStore.Map
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper()
        {
            CreateMap<User, RegisterUserDto>().ReverseMap();
            CreateMap<User, LoginUserDto>().ReverseMap();
            CreateMap<Admin, LoginAdminDto>().ReverseMap();
            CreateMap<Admin, RegisterAdminDto>().ReverseMap();
            CreateMap<Product, RequestProductDto>().ReverseMap();
            CreateMap<Product, ResponseProductDto>().ReverseMap();
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<Category, AddCategoryDto>().ReverseMap();
            CreateMap<CartItem, CartItemDto>().ReverseMap();

        }


    }
}
