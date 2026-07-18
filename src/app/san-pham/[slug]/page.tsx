import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/products/add-to-cart";
import { DataState } from "@/components/shared/data-state";
import { displayPrice, plainText } from "@/lib/format";
import { getProductBySlug } from "@/lib/wordpress/client";

type ProductDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: product } = await getProductBySlug(slug);

  if (!product) return { title: "Danh mục đầu tư" };

  return {
    title: product.name,
    description: plainText(product.shortDescription).slice(0, 160),
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const { slug } = await params;
  const result = await getProductBySlug(slug);

  if (!result.data && !result.error) notFound();

  if (!result.data) {
    return (
      <section className="section">
        <div className="shell">
          <DataState
            isConfigured={result.isConfigured}
            title="Chưa thể tải danh mục đầu tư"
            description={
              result.isConfigured
                ? "Vui lòng kiểm tra kết nối và schema WooGraphQL."
                : "Hãy cấu hình WORDPRESS_GRAPHQL_URL để xem thông tin sản phẩm."
            }
          />
        </div>
      </section>
    );
  }

  const product = result.data;
  const price = displayPrice(product.price);

  return (
    <>
      <section className="shell product-detail">
        <div className="product-gallery">
          {product.image?.sourceUrl ? (
            <Image
              alt={product.image.altText || product.name}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 55vw"
              src={product.image.sourceUrl}
            />
          ) : (
            <span className="image-placeholder" aria-hidden="true">H</span>
          )}
        </div>

        <div>
          <span className="eyebrow">
            {product.productCategories?.nodes[0]?.name ?? "Cơ hội đầu tư"}
          </span>
          <h1>{product.name}</h1>
          <strong className="product-price">{price}</strong>
          <div
            className="product-summary"
            dangerouslySetInnerHTML={{ __html: product.shortDescription }}
          />
          <div className="product-actions">
            <AddToCart
              product={{
                id: product.id,
                slug: product.slug,
                name: product.name,
                price,
                image: product.image?.sourceUrl,
              }}
            />
            <Link className="button button-outline" href="/gio-hang">
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      </section>

      {product.description ? (
        <section className="shell product-description">
          <h2>Thông tin dự án</h2>
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </section>
      ) : null}
    </>
  );
}
