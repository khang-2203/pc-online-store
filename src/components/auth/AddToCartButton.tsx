
"use client";

import { useCartStore } from "@/app/stores/useCartStore";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export function AddToCartButton({ product }: Props) {
  const { addItem } = useCartStore();

  const handleAdd = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <Button
      className="bg-red-500 hover:bg-red-600 text-white"
      onClick={handleAdd}
    >
      Thêm vào giỏ hàng
    </Button>
  );
}
