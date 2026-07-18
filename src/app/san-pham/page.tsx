import type { Metadata } from "next";
import { ProductCard } from "@/components/products/product-card";
import { DataState } from "@/components/shared/data-state";
import { getProducts } from "@/lib/wordpress/client";

export const metadata: Metadata = {
  title: "Danh mục đầu tư",
  description:
    "Khám phá các dự án, bất động sản và mô hình kinh doanh đang tìm kiếm cơ hội hợp tác đầu tư.",
};

export default async function ProductsPage() {
  const products = await getProducts(12);

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-inner">
          <span className="eyebrow">Portfolio</span>
          <h1>Danh mục đầu tư</h1>
          <p>
            Các dự án và mô hình kinh doanh được tuyển chọn để kết nối đúng
            nguồn lực, đúng đối tác và đúng thời điểm triển khai.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          {products.data.length ? (
            <div className="content-grid">
              {products.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <DataState
              isConfigured={products.isConfigured}
              title={
                products.isConfigured
                  ? "Chưa tải được danh mục đầu tư"
                  : "Sẵn sàng kết nối WooCommerce"
              }
              description={
                products.isConfigured
                  ? "Vui lòng kiểm tra WooGraphQL và quyền truy cập sản phẩm công khai."
                  : "Sau khi cài WPGraphQL và WooGraphQL, điền endpoint vào .env.local để sản phẩm xuất hiện tại đây."
              }
            />
          )}
        </div>
      </section>
    </>
  );
}
