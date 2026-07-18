"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/use-cart";

export function CartLink() {
  const items = useCart();
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link className="cart-link" href="/gio-hang" aria-label={`Giỏ hàng, ${count} sản phẩm`}>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M3 3h2l2.3 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 7H7" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      <span>Giỏ hàng</span>
      <strong>{count}</strong>
    </Link>
  );
}
