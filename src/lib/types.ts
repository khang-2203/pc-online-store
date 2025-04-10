// Product type dùng cho từng sản phẩm
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  body: string;
  name: string;
  oldPrice?: number;
  discount?: string;
}

// SubMenu type dùng cho danh mục có chứa nhiều sản phẩm
export interface SubMenu extends Product {
  products: Product[];
}

// CartItem đại diện cho 1 item trong giỏ hàng
export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// CartContextType dùng cho context quản lý giỏ hàng
export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getTotalQuantity: () => number;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  getTotalPrice: () => number;
}
