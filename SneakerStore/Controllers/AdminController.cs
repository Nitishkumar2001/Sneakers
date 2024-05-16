using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SneakerStore.Entities.Dto.AdminDto;
using SneakerStore.Entities.Dto.CategoryDto;
using SneakerStore.Entities.Dto.ProductDto;
using SneakerStore.Entities.Models;
using SneakerStore.Repository.Implementation;
using SneakerStore.Repository.Interfaces;

namespace SneakerStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _adminRepository;
        public AdminController(IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }

        [HttpGet("[action]")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllUsers()
        {
            var all_Users = await _adminRepository.GetAllUsers();
            return Ok(all_Users);
        }
        [HttpPost("[action]")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateCategory(AddCategoryDto addCategoryDto)
        {

            var createcategory = await _adminRepository.AddCategory(addCategoryDto);
            if(createcategory == null)
            {
                return BadRequest("Category Already Exists.");
            }
            return Ok(createcategory);
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllProducts()
        {
            var all_Products = await _adminRepository.GetAllProducts();
            return Ok(all_Products);
        }
        [HttpGet("[action]")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllCategories()
        {
            var all_cat = await _adminRepository.GetAllCategory();
            return Ok(all_cat);
        }

        [HttpGet("GetByIdUser/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetByIdUser(int id)
        {
            var User_id = await _adminRepository.GetByIdUser(id);
            return Ok(User_id);
        }
        [HttpGet("GetByIdProducts/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetByIdProducts(int id)
        {
            var Products_id = await _adminRepository.GetByIdProducts(id);
            return Ok(Products_id);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody] RegisterAdminDto registerAdminDto)
        {
            var register = await _adminRepository.Register(registerAdminDto);
            if (register == null)
            {
                return BadRequest("Username already exists");
            }
            return Ok("Successfully Registered");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] LoginAdminDto loginAdminDto)
        {
            var log = await _adminRepository.Login(loginAdminDto);
            if(log == null)
            {
                return BadRequest("Invalid Username and Password!");
            }
            return Ok(log);
        }

        [HttpPost("[action]")]
        [Authorize(Roles = "Admin")]

        public async Task<IActionResult> AddProducts([FromBody] RequestProductDto requestProductDto)
        {
            var productdto = await _adminRepository.AddProducts(requestProductDto);
            if (productdto == null)
            {
                return BadRequest("Product already exists");
            }
            return Ok(productdto);
        }

        [HttpPut("UpdateProducts/{id}")]
      
        public async Task<IActionResult> UpdateProducts(int id, [FromBody] RequestProductDto product)
        {
            await _adminRepository.UpdateProducts(id, product);
            return Ok(new { message = "Product Upadated Successfully" });
        }

        [HttpDelete("deleteproduct/{id}")]
      
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var Prod = await _adminRepository.GetByIdProducts(id);
            if (Prod == null)
            {
                return NotFound();
            }
            await _adminRepository.DeleteProducts(id);
            return Ok(new { message = "Deleted" });
        }
        [HttpGet("[action]")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetAllOrders()
        {
            var orders = await _adminRepository.GetAllOrders();
            return Ok(orders);
        }

    }
}
