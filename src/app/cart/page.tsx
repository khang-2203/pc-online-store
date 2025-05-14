// app/cart/CartPage.tsx
"use client";

import { useCartStore } from "@/app/stores/useCartStore";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  // Lấy giỏ hàng từ store
  const { items, totalPrice, addItem, removeItem, updateQuantity, clearCart } =
    useCartStore();

  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(), // ID sản phẩm, có thể thay đổi theo logic thực tế
      title: "Laptop ASUS ROG",
      price: 30000000,
      quantity: 1,
      image: "/zone-1.jpg",
    };
    addItem(newItem);
  };

  // Hiển thị các sản phẩm trong giỏ hàng
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

      <div className="flex justify-between">
        <span className="text-xl font-semibold">
          Tổng tiền: {totalPrice} VND
        </span>
        <Button onClick={clearCart} className="bg-gray-500 text-white">
          Xóa giỏ hàng
        </Button>
      </div>

      <Button onClick={handleAddToCart} className="mt-6 bg-red-600 text-white">
        Thêm sản phẩm vào giỏ hàng
      </Button>
    </div>
  );
};

export default CartPage;
