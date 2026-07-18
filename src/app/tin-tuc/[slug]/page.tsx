import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DataState } from "@/components/shared/data-state";
import { formatDate, plainText } from "@/lib/format";
import { getPostBySlug } from "@/lib/wordpress/client";

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: NewsDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await getPostBySlug(slug);

  if (!post) return { title: "Tin tức" };

  return {
    title: post.title,
    description: plainText(post.excerpt).slice(0, 160),
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const result = await getPostBySlug(slug);

  if (!result.data && !result.error) notFound();

  if (!result.data) {
    return (
      <section className="section">
        <div className="shell">
          <DataState
            isConfigured={result.isConfigured}
            title="Chưa thể tải bài viết"
            description={
              result.isConfigured
                ? "Vui lòng kiểm tra kết nối và schema WPGraphQL."
                : "Hãy cấu hình WORDPRESS_GRAPHQL_URL để xem nội dung bài viết."
            }
          />
        </div>
      </section>
    );
  }

  const post = result.data;
  const image = post.featuredImage?.node;

  return (
    <article>
      <header className="article-shell article-header">
        <span className="eyebrow">
          {post.categories?.nodes[0]?.name ?? "Tin tức"}
        </span>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </header>

      <div className="article-shell">
        {image?.sourceUrl ? (
          <div className="article-cover">
            <Image
              alt={image.altText || post.title}
              fill
              priority
              sizes="(max-width: 880px) 100vw, 840px"
              src={image.sourceUrl}
            />
          </div>
        ) : null}
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
