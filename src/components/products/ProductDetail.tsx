"use client";

import { Product } from "@/lib/types";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.body}</p>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
