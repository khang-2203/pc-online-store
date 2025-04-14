"use client";

import { mockProduct } from "@/app/products/mockData";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductDetailPage() {
  const product = mockProduct;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded shadow">
      <div className="relative w-full h-[400px]">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-center space-x-4 mb-4">
          <span className="text-red-600 text-xl font-bold">
            {product.price} VND
          </span>
          {product.oldPrice && (
            <span className="line-through text-gray-400">
              {product.oldPrice} VND
            </span>
          )}
          {product.discount && (
            <span className="text-sm bg-red-500 text-white px-2 py-1 rounded">
              {product.discount}
            </span>
          )}
        </div>
        <Button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          Mua Ngay
        </Button>
      </div>
      <div className="">
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thông tin sản phẩm</h2>
          <div className="text-gray-700 leading-relaxed space-y-2">
            <p>
              <strong>CPU:</strong> Intel Core i7-13700H
            </p>
            <p>
              <strong>RAM:</strong> 16GB DDR5
            </p>
            <p>
              <strong>Ổ cứng:</strong> 512GB SSD NVMe
            </p>
            <p>
              <strong>Card đồ họa:</strong> NVIDIA RTX 4060
            </p>
            <p>
              <strong>Màn hình:</strong> 15.6" Full HD 144Hz
            </p>
            <p>
              <strong>Trọng lượng:</strong> 1.8kg
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
