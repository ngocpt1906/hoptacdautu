import type { Metadata } from "next";
import { CartPage } from "@/components/cart/cart-page";

export const metadata: Metadata = {
  title: "Giỏ hàng",
  description:
    "Danh sách cơ hội đầu tư bạn quan tâm và thông tin liên hệ tư vấn.",
};

export default function CartRoute() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-inner">
          <span className="eyebrow">Danh sách quan tâm</span>
          <h1>Giỏ hàng của bạn</h1>
          <p>
            Đây là danh sách phục vụ tư vấn, không phát sinh thanh toán hoặc
            cam kết đầu tư trực tuyến.
          </p>
        </div>
      </section>
      <CartPage />
    </>
  );
}
