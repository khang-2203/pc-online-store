"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.body}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
