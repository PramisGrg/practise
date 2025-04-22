export type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

export const products: Product[] = [
  { id: 1, name: "iPhone 15", price: 999, inStock: true },
  { id: 2, name: "Samsung Galaxy S23", price: 899, inStock: false },
  { id: 3, name: "Google Pixel 8", price: 799, inStock: true },
];
