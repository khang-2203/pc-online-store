"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Countdown from "react-countdown";

const FlashSale = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Màn hình Asus ROG Strix",
      oldPrice: "29.990.000đ",
      newPrice: "x.x90.000",
      sold: 1,
      img: "/monitor1.jpg",
    },
    {
      id: 2,
      name: "Màn hình ASUS ROG",
      oldPrice: "20.990.000đ",
      newPrice: "x.x90.000",
      sold: 15,
      img: "/monitor2.jpg",
    },
    {
      id: 3,
      name: "Màn hình ViewSonic VX2758A",
      oldPrice: "7.990.000đ",
      newPrice: "x.x90.000",
      sold: 4,
      img: "/monitor3.jpg",
    },
    {
      id: 4,
      name: "Màn hình cong ViewSonic VX3218C",
      oldPrice: "7.990.000đ",
      newPrice: "x.x90.000",
      sold: 16,
      img: "/monitor4.jpg",
    },
    {
      id: 5,
      name: "Màn hình ASUS TUF GAMING",
      oldPrice: "9.490.000đ",
      newPrice: "x.x90.000",
      sold: 16,
      img: "/monitor5.jpg",
    },
    {
      id: 6,
      name: "Màn hình AOC Q24G4E",
      oldPrice: "5.990.000đ",
      newPrice: "x.x90.000",
      sold: 29,
      img: "/monitor6.jpg",
    },
  ]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl max-w-6xl mx-auto shadow-lg ">
      <div className="flex items-center justify-between text-white font-bold text-xl mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span> FLASH SALE 10H MỖI NGÀY
        </div>
        <div className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm font-semibold">
          <Countdown date={Date.now() + 3600000} />
        </div>
      </div>

      <div className="max-w-full overflow-hidden">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={15}
          slidesPerView={2}
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
