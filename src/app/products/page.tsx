"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductList from "@/components/products/ProductList";
import { Product } from "@/lib/types";

async function fetchProducts(): Promise<Product[]> {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}

export default function ProductsPage() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      const formattedData: Product[] = res.data
        .slice(0, 20)
        .map((post: any) => ({
          id: post.id,
          title: post.title,
          body: post.body,
          name: post.title,
          description: post.body,
          price: Math.floor(Math.random() * 1000000),
          image: "https://via.placeholder.com/150",
        }));

      console.log("Fetched products:", formattedData);
      return formattedData;
    },
  });

  if (isLoading) return <p>Đang tải sản phẩm...</p>;
  if (error) return <p>Đã có lỗi xảy ra!</p>;

  return (
    <div className="container mx-auto">
      <ProductList products={products || []} />
    </div>
  );
}
