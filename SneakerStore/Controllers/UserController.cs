using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.DataProtection.XmlEncryption;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SneakerStore.Entities.Dto.UserDto;
using SneakerStore.Entities.Models;
using SneakerStore.Repository.Interfaces;

namespace SneakerStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _UserRepository;
        public UserController(IUserRepository userRepository)
        {
            _UserRepository = userRepository;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto registeruserdto)
        {
            var register = await _UserRepository.Register(registeruserdto);
            if (register == null)
            {
                return BadRequest("Email already exists");
            }
            return Ok("Successfully Registered");           
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] LoginUserDto? loginUserDto)
        {
            var login = await _UserRepository.Login(loginUserDto);
            if(login == null)
            {
                return BadRequest("Invalid Email and Password");
            }
            return Ok(login);
        }

        [HttpPut("updatedetails/{id}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> Update(int id, [FromBody] RegisterUserDto user)
        {
            var up_User = await _UserRepository.UpdateUser(id, user);
            if (up_User == null)
            {
                return NotFound();
            }
            return Ok("Updated Successfully");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> getCategories()
        {
            var log = await _UserRepository.GetCategories();
            return Ok(log);
        }
        [HttpGet("getProductsByCategories/{categoryId}/products")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> getProductsByCategories(int categoryId)
        {
            var log = await _UserRepository.GetProductsByCategory(categoryId);
            return Ok(log);
        }

        [HttpGet("SearchByBrand/{brandName}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> SearchByBrand(string brandName)
        {
            var brand = await _UserRepository.SearchByBrand(brandName);
            if (brand == null)
            {
                return NotFound();
            }
            return Ok(brand);
        }

        [HttpGet("[action]")]
        [Authorize(Roles = "User")]

        public async Task<IActionResult> GetAllProduct()
        {
            var log = await _UserRepository.GetAllProducts();
            return Ok(log);
        }

        [HttpPost("CheckOut/{userEmail}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> CheckOut(string userEmail)
        {
            var checkout = await _UserRepository.CheckOut(userEmail);
            if (checkout == null)
            {
                return BadRequest("Cart is empty. Cannot create an order.");
            }
            return Ok(new { message = "Order placed successfully." });
        }
        [HttpGet("orders/{userEmail}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> GetOrdersByUserId(string userEmail)
        {
            var orders = await _UserRepository.GetOrdersByUserId(userEmail);
            return Ok(orders);
        }
    }
}