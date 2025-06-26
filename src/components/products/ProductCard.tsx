"use client";

import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  // Xử lý ảnh
  const imageUrl = product.image_url?.trim()
    ? product.image_url.startsWith("http")
      ? product.image_url
      : `http://localhost:5000${product.image_url}`
    : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[450px]">
      <div>
        <div className="relative w-full h-52 mb-3">
          <Image
            src={imageUrl}
            alt={product.title || product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <h2 className="text-lg font-bold line-clamp-1 h-[28px]">{product.title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2 h-[40px]">{product.description}</p>
        <h3 className="font-semibold text-lg text-center line-clamp-2 h-[48px]">{product.name}</h3>

        <div className="flex items-center space-x-2 mt-2">
          <p className="text-red-500 font-bold">
            {product.price.toLocaleString("vi-VN")} VND
          </p>

          {product.oldPrice && (
            <p className="text-gray-400 line-through text-sm">
              {product.oldPrice.toLocaleString("vi-VN")} VND
            </p>
          )}

          {product.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </span>
          )}
        </div>
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
