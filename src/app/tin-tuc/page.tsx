import type { Metadata } from "next";
import { PostCard } from "@/components/news/post-card";
import { DataState } from "@/components/shared/data-state";
import { getPosts } from "@/lib/wordpress/client";

export const metadata: Metadata = {
  title: "Tin tức & tư vấn",
  description:
    "Tin tức, góc nhìn và tư vấn mới nhất về đầu tư, bất động sản và kinh doanh.",
};

export default async function NewsPage() {
  const posts = await getPosts(12);

  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-inner">
          <span className="eyebrow">Insights</span>
          <h1>Tin tức & tư vấn</h1>
          <p>
            Cập nhật xu hướng thị trường, kinh nghiệm triển khai và những góc
            nhìn thực tế giúp bạn đưa ra quyết định đầu tư rõ ràng hơn.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          {posts.data.length ? (
            <div className="content-grid">
              {posts.data.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <DataState
              isConfigured={posts.isConfigured}
              title={
                posts.isConfigured
                  ? "Chưa tải được bài viết"
                  : "Sẵn sàng kết nối WordPress"
              }
              description={
                posts.isConfigured
                  ? "Vui lòng kiểm tra endpoint và schema WPGraphQL của bạn."
                  : "Điền WORDPRESS_GRAPHQL_URL trong .env.local sau khi cài WPGraphQL để hiển thị bài viết."
              }
            />
          )}
        </div>
      </section>
    </>
  );
}
