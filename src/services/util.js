export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

// export const productsAPI =
  // 'https://react-shopping-cart-67954.firebaseio.com/products.json';
// export const productsAPI = "http://localhost:8002/api/products";
export const productsAPI = "https://reactshoppingcart.azurewebsites.net/api/products";
