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

  return (
    <div className="w-full mt-8 bg-white p-4 rounded-lg shadow-md ">
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
        className="w-full  "
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

export default function ProductList({
  products = [],
}: {
  products: Product[];
}) {
  return (
    <div className="w-full">
      <ProductCategory title="PC Bán Chạy" products={products} />
      <ProductCategory title="Laptop Gaming Bán Chạy " products={products} />
      <ProductCategory title="Laptop Văn Phòng Bán Chạy" products={products} />
      <ProductCategory title="Chuột Bán Chạy" products={products} />
      <ProductCategory title="Bàn Phím Bán Chạy" products={products} />
    </div>
  );
}
