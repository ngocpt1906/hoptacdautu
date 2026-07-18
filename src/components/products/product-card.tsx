import Image from "next/image";
import Link from "next/link";
import { displayPrice, plainText } from "@/lib/format";
import type { WpProduct } from "@/lib/wordpress/types";

export function ProductCard({ product }: { product: WpProduct }) {
  const category =
    product.productCategories?.nodes[0]?.name ?? "Cơ hội đầu tư";

  return (
    <article className="content-card product-card">
      <Link className="card-media" href={`/san-pham/${product.slug}`}>
        {product.image?.sourceUrl ? (
          <Image
            alt={product.image.altText || product.name}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
            src={product.image.sourceUrl}
          />
        ) : (
          <span className="image-placeholder" aria-hidden="true">
            H
          </span>
        )}
        <span className="card-badge">{category}</span>
      </Link>
      <div className="card-body">
        <h2>
          <Link href={`/san-pham/${product.slug}`}>{product.name}</Link>
        </h2>
        <p>{plainText(product.shortDescription).slice(0, 130)}</p>
        <div className="product-card-footer">
          <strong>{displayPrice(product.price)}</strong>
          <Link
            className="circle-link"
            href={`/san-pham/${product.slug}`}
            aria-label={`Xem ${product.name}`}
          >
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
