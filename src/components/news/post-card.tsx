import Image from "next/image";
import Link from "next/link";
import { formatDate, plainText } from "@/lib/format";
import type { WpPost } from "@/lib/wordpress/types";

export function PostCard({ post }: { post: WpPost }) {
  const image = post.featuredImage?.node;
  const category = post.categories?.nodes[0]?.name ?? "Tin tức";

  return (
    <article className="content-card">
      <Link className="card-media" href={`/tin-tuc/${post.slug}`}>
        {image?.sourceUrl ? (
          <Image
            alt={image.altText || post.title}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
            src={image.sourceUrl}
          />
        ) : (
          <span className="image-placeholder" aria-hidden="true">
            H
          </span>
        )}
      </Link>
      <div className="card-body">
        <div className="card-meta">
          <span>{category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h2>
          <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{plainText(post.excerpt).slice(0, 145)}</p>
        <Link className="text-link" href={`/tin-tuc/${post.slug}`}>
          Đọc bài viết <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
