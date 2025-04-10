"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

const CartPage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Giỏ hàng của bạn</h1>

      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống. Về trang chủ mua hàng đi bạn ơi!</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b py-4 gap-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    {item.price.toLocaleString()}đ
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <Minus />
                  </Button>
                  <span className="text-sm">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <Plus />
                  </Button>
                </div>

                <div className="text-right w-24">
                  {(item.price * item.quantity).toLocaleString()}đ
                </div>

                <Button variant="ghost" onClick={() => removeFromCart(item.id)}>
                  <Trash2 />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right text-lg font-bold">
            Tổng cộng: {getTotalPrice().toLocaleString()}đ
          </div>

          <div className="mt-4 text-right">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Tiến hành thanh toán
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
