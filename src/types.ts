// DO NOT CHANGE THIS FILES

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

export interface MainProduct {
  discountedPrice: number;
}

export interface MainOrder {
  products: MainProduct[];
  userId: User["id"];
}

export interface TrainingProduct {
  id: Product["id"];
  price: Product["price"];
  discountPercentage: Product["discountPercentage"];
}
