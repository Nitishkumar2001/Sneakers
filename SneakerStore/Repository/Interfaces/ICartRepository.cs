using SneakerStore.Entities.Dto.CartItemDto;
using SneakerStore.Entities.Models;

namespace SneakerStore.Repository.Interfaces
{
    public interface ICartRepository
    {
        void AddItemToUserCart( int productId, int quantity, string userEmail);
        List<CartItemDto> GetAllCartItemsForUser(string userEmail);
        void ClearUserCart(string userEmail);
        void RemoveItemFromCartById(int productId, string userEmail);
        
    }
}
