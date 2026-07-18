"use client";

import { useState } from "react";
import { addCartItem } from "@/lib/cart/store";

type AddToCartProps = {
  product: {
    id: string;
    slug: string;
    name: string;
    price: string;
    image?: string;
  };
};

export function AddToCart({ product }: AddToCartProps) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addCartItem(product);
    setAdded(true);
  }

  return (
    <button className="button add-to-cart" type="button" onClick={handleAdd}>
      {added ? "Đã thêm vào giỏ" : "Thêm vào giỏ hàng"}
    </button>
  );
}
