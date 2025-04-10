import { Product } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm | Xgear",
  description: "Danh sách các sản phẩm hot nhất tại Xgear",
};

interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();

  const product: Product = {
    id: data.id,
    title: data.title,
    description: data.body,
    price: Math.floor(Math.random() * 1000000),
    image: "https://via.placeholder.com/150",
    body: data.body,
    name: data.title,
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-red-500 font-bold">{product.price} VND</p>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
