"use client";

import { mockProduct } from "@/app/products/mockData";
import { useCartStore } from "@/app/stores/useCartStore"; // Import hook Zustand
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductDetailPage() {
  const product = mockProduct;

  // Lấy phương thức addItem từ useCartStore
  const { addItem } = useCartStore();

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1, // Số lượng mặc định là 1 khi thêm vào giỏ
      image: product.image,
    };

    // Gọi addItem để thêm sản phẩm vào giỏ hàng
    addItem(productToAdd);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <Button
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            onClick={handleAddToCart} // Thêm vào giỏ hàng
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>

      {/* Thông tin sản phẩm, Sản phẩm đã xem, Đánh giá */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Thông tin sản phẩm</h2>
          <div className="space-y-4 text-gray-800">
            {[
              ["CPU", "Intel Core i7-13700H"],
              ["RAM", "16GB DDR5"],
              ["Ổ cứng", "512GB SSD NVMe"],
              ["Card đồ họa", "NVIDIA RTX 4060"],
              ["Màn hình", '15.6" Full HD 144Hz'],
              ["Trọng lượng", "1.8kg"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b pb-2">
                <span className="font-medium">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Sản phẩm đã xem</h2>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Laptop Asus TUF Gaming",
                image: "/images/product1.jpg",
                price: "23,990,000 VND",
              },
              {
                id: 2,
                title: "Laptop Acer Nitro 5",
                image: "/images/product2.jpg",
                price: "21,490,000 VND",
              },
            ].map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-red-500 text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Đánh giá sản phẩm</h2>
        <div className="space-y-4">
          {[
            {
              user: "Nguyễn Văn A",
              rating: 5,
              comment: "Sản phẩm dùng rất tốt, chơi game mượt, máy mát.",
            },
            {
              user: "Trần Thị B",
              rating: 4,
              comment: "Máy đẹp, cấu hình mạnh, chỉ tiếc là pin hơi yếu chút.",
            },
          ].map((review, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold">{review.user}</span>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
