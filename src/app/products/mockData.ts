export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  image: string;
  brand: string;
};

export const mockProduct: Product = {
  id: 1,
  title: "Laptop Gaming ASUS ROG",
  description: "Hiệu năng cao, thiết kế mạnh mẽ dành cho game thủ.",
  price: 30000000,
  oldPrice: 35000000,
  discount: "-14%",
  image: "/zone-1.jpg",
  brand: "ASUS",
};
