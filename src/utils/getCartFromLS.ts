import { Product } from "../redux/slices/basketSlice";

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const products = data ? JSON.parse(data) : [];

  if (products.length) {

    const totalAmount = products.reduce( (acc: number, product: Product) => acc + product.price, 0);
    const totalCount = products.reduce( (acc: number, product: Product) => acc + product.count, 0);
    return {
      products,
      totalAmount,
      totalCount
    }
  }
  return data ? JSON.parse(data) : [];
}