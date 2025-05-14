import { create } from "zustand";

// Định nghĩa trạng thái của giỏ hàng
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[]; // Danh sách sản phẩm trong giỏ hàng
  totalPrice: number; // Tổng giá trị giỏ hàng
  addItem: (item: CartItem) => void; // Thêm sản phẩm vào giỏ hàng
  removeItem: (id: number) => void; // Xóa sản phẩm khỏi giỏ hàng
  updateQuantity: (id: number, quantity: number) => void; // Cập nhật số lượng sản phẩm
  clearCart: () => void; // Xóa hết giỏ hàng
}

// Khởi tạo store với zustand
export const useCartStore = create<CartStore>((set) => ({
  items: [],
  totalPrice: 0,
  addItem: (item) =>
    set((state) => {
      const updatedItems = [...state.items, item];
      const updatedTotalPrice = updatedItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return { items: updatedItems, totalPrice: updatedTotalPrice };
    }),
  removeItem: (id) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      const updatedTotalPrice = updatedItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return { items: updatedItems, totalPrice: updatedTotalPrice };
    }),
  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      const updatedTotalPrice = updatedItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return { items: updatedItems, totalPrice: updatedTotalPrice };
    }),
  clearCart: () => set({ items: [], totalPrice: 0 }),
}));
