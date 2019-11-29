class Cart {
  static CART_KEY = 'cart';
  static saveItemToCart = (itemId, quantity) => {
    const currentCart = this.getCart();
    const updatedCart = currentCart;
    updatedCart[itemId] = quantity;
    localStorage.setItem(this.CART_KEY, JSON.stringify(updatedCart));
  }
  static getCart() {
    const settings = JSON.parse(localStorage.getItem(this.CART_KEY) || 'null');
    return settings;
  }
  static getQuantityForItem = (id) => {
    const cart = this.getCart();
    return cart[id] || 0;
  }
}

export default Cart;
