import { create } from "zustand";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[]; 
  totalPrice: number; 
  addItem: (item: CartItem) => void; 
  removeItem: (id: number) => void; 
  updateQuantity: (id: number, quantity: number) => void; 
  clearCart: () => void; 
}


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
