"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/use-cart";
import { siteConfig } from "@/config/site";
import {
  clearCart,
  removeCartItem,
  updateCartItemQuantity,
} from "@/lib/cart/store";

export function CartPage() {
  const items = useCart();
  const productSummary = items
    .map((item) => `- ${item.name} (SL: ${item.quantity})`)
    .join("\n");
  const emailHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    "Tư vấn danh mục đầu tư",
  )}&body=${encodeURIComponent(
    `Tôi muốn được tư vấn về:\n${productSummary || "- Chưa chọn danh mục cụ thể"}`,
  )}`;

  return (
    <div className="shell cart-layout">
      <section className="cart-list">
        <h2>Danh mục đã chọn ({items.length})</h2>

        {items.length ? (
          <>
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  {item.image ? (
                    <Image
                      alt={item.name}
                      fill
                      sizes="72px"
                      src={item.image}
                    />
                  ) : (
                    <span className="image-placeholder" aria-hidden="true">H</span>
                  )}
                </div>
                <div className="cart-item-info">
                  <Link href={`/san-pham/${item.slug}`}>{item.name}</Link>
                  <strong>{item.price}</strong>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => removeCartItem(item.id)}
                  >
                    Xóa khỏi giỏ
                  </button>
                </div>
                <div className="quantity-control" aria-label="Số lượng">
                  <button
                    type="button"
                    aria-label="Giảm số lượng"
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label="Tăng số lượng"
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </article>
            ))}
            <div className="cart-footer">
              <button
                className="button button-danger"
                type="button"
                onClick={clearCart}
              >
                Xóa toàn bộ
              </button>
            </div>
          </>
        ) : (
          <div className="data-state">
            <span className="data-state-icon" aria-hidden="true">0</span>
            <h2>Giỏ hàng đang trống</h2>
            <p>
              Thêm những danh mục bạn quan tâm để đội ngũ của chúng tôi tư vấn
              chính xác hơn.
            </p>
            <Link href="/san-pham">Khám phá danh mục đầu tư</Link>
          </div>
        )}
      </section>

      <aside className="contact-panel">
        <span className="eyebrow">Tư vấn trực tiếp</span>
        <h2>Trao đổi cùng chuyên gia</h2>
        <p>
          Không thanh toán trực tuyến. Chúng tôi lắng nghe mục tiêu và nguồn
          lực của bạn trước khi đề xuất phương án hợp tác phù hợp.
        </p>
        <div className="contact-actions">
          <a href={siteConfig.contact.phoneHref}>
            Gọi {siteConfig.contact.phone}
          </a>
          <a
            href={`https://zalo.me/${siteConfig.contact.zalo}`}
            target="_blank"
            rel="noreferrer"
          >
            Nhắn tin qua Zalo
          </a>
          <a href={emailHref}>Gửi danh sách qua email</a>
        </div>
        <address className="contact-address">
          {siteConfig.contact.address}
        </address>
      </aside>
    </div>
  );
}
