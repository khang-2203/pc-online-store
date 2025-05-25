"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Countdown from "react-countdown";

const FlashSale = () => {
  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    setEndTime(Date.now() + 3600000);
  }, []);

  const [products] = useState([
    {
      id: 1,
      name: "Màn hình cong Asus TUF GAMING VG27VH1B",
      oldPrice: "5,699,000 ₫",
      newPrice: "x.190.000",
      sold: 1,
      img: "/Màn hình cong Asus TUF GAMING VG27VH1B.webp",
    },
    {
      id: 2,
      name: "Màn hình Gigabyte G27Q-EK",
      oldPrice: "7,990,000 ₫",
      newPrice: "x.950.000",
      sold: 15,
      img: "/Màn hình Gigabyte G27Q-EK.webp",
    },
    {
      id: 3,
      name: "Màn hình LG 27UP600-W 27inch",
      oldPrice: "8,499,000 ₫",
      newPrice: "x.690.000",
      sold: 4,
      img: "/Màn hình LG 27UP600-W 27inch.webp",
    },
    {
      id: 4,
      name: "Màn hình Dell 27 inch P2723D",
      oldPrice: "10,499,000 ₫",
      newPrice: "x.290.000",
      sold: 16,
      img: "/Màn hình Dell 27 inch P2723D.webp",
    },
    {
      id: 5,
      name: "Màn hình Gigabyte G34WQC A-EK 34 inch",
      oldPrice: "10,799,000 ₫",
      newPrice: "x.890.000",
      sold: 16,
      img: "/Màn hình Gigabyte G34WQC A-EK 34 inch.webp",
    },
    {
      id: 6,
      name: "Màn hình LG 32UR500-B ",
      oldPrice: "9,290,000 ₫",
      newPrice: "x.350.000",
      sold: 29,
      img: "/Màn hình LG 32UR500-B.webp",
    },
  ]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl max-w-6xl mx-auto shadow-lg">
      <div className="flex items-center justify-between text-white font-bold text-xl mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span> FLASH SALE 10H MỖI NGÀY
        </div>
        <div className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm font-semibold">
          {endTime ? <Countdown date={endTime} /> : "00:00:00"}
        </div>
      </div>

      <div className="max-w-full overflow-hidden">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={15}
          slidesPerView={4}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-6"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-gray-400 line-through text-sm">
                  {product.oldPrice}
                </p>
                <p className="text-red-500 font-bold text-lg">
                  {product.newPrice}
                </p>
                <p className="text-orange-500 text-sm mt-1">
                  🔥 Đã bán: {product.sold}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-blue-400 text-white px-6 py-2 rounded-md font-semibold shadow-md transition-all cursor-pointer">
          Xem thêm khuyến mãi
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
