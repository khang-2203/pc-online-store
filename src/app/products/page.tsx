"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductList from "@/components/products/ProductList";
import { Product } from "@/lib/types";

async function fetchProducts(): Promise<Product[]> {
  const res = await axios.get("http://localhost:5000/api/products");
  return res.data;
}

export default function ProductsPage() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Đang tải sản phẩm...</p>;
  if (error) return <p>Đã có lỗi xảy ra khi tải sản phẩm.</p>;

  return (
    <div className="container mx-auto">
      <ProductList products={products || []} />
    </div>
  );
}
