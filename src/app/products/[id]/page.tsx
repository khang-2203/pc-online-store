// src/app/products/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { AddToCartButton } from "@/components/auth/AddToCartButton";
import { Product } from "@/lib/types";

// Hàm lấy dữ liệu sản phẩm từ database hoặc API
async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const product = await res.json();
    return product;
  } catch (error) {
    console.error("Lỗi khi fetch sản phẩm:", error);
    return null;
  }
}

// Component trang chi tiết sản phẩm
export default async function ProductDetailPage(props: {
  params: { id: string };
}) {
  const { params } = await Promise.resolve(props); 
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="rounded shadow-md"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-red-500 font-semibold text-xl">
            {product.price.toLocaleString()}₫
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
