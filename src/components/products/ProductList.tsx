"use client";

import { Product } from "@/lib/types";
import ProductCard from "@/components/products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";

interface ProductListProps {
  title: string;
  products?: Product[];
}

function ProductCategory({ title, products = [] }: ProductListProps) {
  const router = useRouter();
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  if (products.length === 0) return null;

  return (
    <div className="w-full mt-8 bg-white p-4 rounded-lg shadow-md">
      <h2
        className="text-2xl font-bold mb-4 cursor-pointer hover:text-red-500 transition"
        onClick={() => router.push(`/categories/${slug}`)}
      >
        {title}
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={16}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        <style jsx>{`
          :global(.swiper-button-prev),
          :global(.swiper-button-next) {
            color: #b0b0b0 !important;
          }
        `}</style>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function ProductList({ products = [] }: { products: Product[] }) {
  const pcProducts: Product[] = [];
  const laptopProducts: Product[] = [];
  const mouseProducts: Product[] = [];
  const monitorProducts: Product[] = [];
  const otherProducts: Product[] = [];

  const assignedProductIds = new Set<number>();

  for (const product of products) {
    const name = product.name.toLowerCase();

    if (name.includes("pc") && !assignedProductIds.has(product.id)) {
      pcProducts.push(product);
      assignedProductIds.add(product.id);
    } else if (name.includes("laptop") && !assignedProductIds.has(product.id)) {
      laptopProducts.push(product);
      assignedProductIds.add(product.id);
    } else if (name.includes("chuột") && !assignedProductIds.has(product.id)) {
      mouseProducts.push(product);
      assignedProductIds.add(product.id);
    } else if (name.includes("màn hình") && !assignedProductIds.has(product.id)) {
      monitorProducts.push(product);
      assignedProductIds.add(product.id);
    } else if (!assignedProductIds.has(product.id)) {
      otherProducts.push(product);
      assignedProductIds.add(product.id);
    }
  }

  return (
    <div className="w-full">
      <ProductCategory title="PC Bán Chạy" products={pcProducts} />
      <ProductCategory title="Laptop Gaming" products={laptopProducts} />
      <ProductCategory title="Chuột Gaming" products={mouseProducts} />
      <ProductCategory title="Màn Hình" products={monitorProducts} />
      <ProductCategory title="Tai Nghe" products={otherProducts} />
    </div>
  );
}
