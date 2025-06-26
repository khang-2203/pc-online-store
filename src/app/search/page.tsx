"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/lib/types";
import axios from "axios";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || ""; 
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const q = query.toLowerCase().trim();
    const result = products.filter((p) =>
      p.name.toLowerCase().includes(q)
    );
    setFiltered(result);
  }, [query, products]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Kết quả tìm kiếm cho: <span className="text-red-600">"{query}"</span>
      </h1>
      {filtered.length === 0 ? (
        <p>Không tìm thấy sản phẩm nào.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
