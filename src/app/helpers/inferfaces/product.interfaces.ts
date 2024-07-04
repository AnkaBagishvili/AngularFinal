export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discount?: number;
  rating: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  image?: string;
}
