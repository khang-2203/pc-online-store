"use client";

import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const imageUrl = product.image?.trim() ? product.image : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-52 mb-3">
      <Image
       src={imageUrl}
       alt={product.title}
       layout="fill"
       objectFit="cover"
       className="rounded-md"
       />

      </div>
      <h2 className="text-lg font-bold truncate">{product.title}</h2>
      <p className="text-gray-500 text-sm truncate">{product.description}</p>
      <h3 className="font-semibold text-lg text-center">{product.name}</h3>
      <div className="flex items-center space-x-2 mt-2">
        <p className="text-red-500 font-bold">{product.price} VND</p>
        {product.oldPrice && (
          <p className="text-gray-400 line-through text-sm">
            {product.oldPrice} VND
          </p>
        )}
        {product.discount && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}
          </span>
        )}
      </div>

      <button
        className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded font-medium hover:bg-red-600 transition-all cursor-pointer"
        onClick={() => router.push(`/products/${product.id}`)}
      >
        Xem chi tiết
      </button>
    </div>
  );
}
