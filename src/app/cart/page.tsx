"use client";

import { useState } from "react";
import { useCartStore } from "@/app/stores/useCartStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CartPage = () => {
  const {
    items,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCartStore();

  const [open, setOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleAddToCart = () => {
    const newItems = [
    {
      id: Date.now(),
      title: "Laptop ASUS ROG",
      price: 30000000 ,
      quantity: 1,
      image: "/Laptop ASUS ROG.jpg",
    },
    {
      id: Date.now() + 1,
      title: "Chuột Logitech splight.png",
      price: 2500000,
      quantity: 1,
      image: "/logitech splight.png",
    },
    {
      id: Date.now() + 2,
      title: "Bàn phím cơ Akko 3087",
      price: 1320000,
      quantity: 1,
      image: "/Bàn phím cơ Akko 3087.png",
    },
  ];


    newItems.forEach((item) => addItem(item));
  };

  const handleConfirmPayment = () => {
    if (!selectedMethod) {
      alert("Vui lòng chọn phương thức thanh toán.");
      return;
    }

    console.log("Phương thức thanh toán được chọn:", selectedMethod);
    setOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Giỏ hàng của bạn</h1>

      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.price} VND</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    min="1"
                    className="border p-1"
                  />
                </div>
              </div>
              <Button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white"
              >
                Xóa
              </Button>
            </div>
          ))
        ) : (
          <p>Giỏ hàng của bạn đang trống.</p>
        )}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">
          Tổng tiền: {totalPrice} VND
        </span>
        <Button onClick={clearCart} className="bg-red-500 text-white">
          Xóa giỏ hàng
        </Button>
      </div>

      <div className="flex justify-between mt-6">
        <Button onClick={handleAddToCart} className="bg-red-600 text-white">
          Thêm sản phẩm vào giỏ hàng
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 text-white">Thanh Toán</Button>
          </DialogTrigger>
          <DialogContent className="bg-white backdrop-blur-md rounded-lg shadow-lg">
            <DialogHeader>
              <DialogTitle>Phương thức thanh toán</DialogTitle>
              <DialogDescription className="space-y-4 mt-4">
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="momo"
                      checked={selectedMethod === "momo"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="accent-red-600"
                    />
                    <span>MoMo</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="visa"
                      checked={selectedMethod === "visa"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="accent-red-600"
                    />
                    <span>Visa</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="jcb"
                      checked={selectedMethod === "jcb"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="accent-red-600"
                    />
                    <span>JCB</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={selectedMethod === "cod"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="accent-red-600"
                    />
                    <span>Thanh toán khi nhận hàng</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="mastercard"
                      checked={selectedMethod === "mastercard"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="accent-red-600"
                    />
                    <span>MasterCard</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="installment"
                      checked={selectedMethod === "installment"}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="accent-red-600"
                    />
                    <span>Trả góp 0%</span>
                  </label>
                </div>

                <Button
                  className="bg-red-600 text-white w-full mt-4"
                  onClick={handleConfirmPayment}
                >
                  Xác nhận thanh toán
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CartPage;
