export interface User {
  id: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export interface Order {
  id: number;
  total: number;
  discountedTotal: number;
  userId: User["id"];
  totalProducts: number;
  totalQuantity: number;
  products: Product[];
}
