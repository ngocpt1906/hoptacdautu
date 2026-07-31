import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/home/contact-form";
import { HomeSlider } from "@/components/home/home-slider";
import { Reveal } from "@/components/home/reveal";
import { PostCard } from "@/components/news/post-card";
import { DataState } from "@/components/shared/data-state";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { plainText } from "@/lib/format";
import { cn } from "@/lib/utils";
import { getPosts, getProducts } from "@/lib/wordpress/client";

const serviceCards = [
  {
    title: "ĐẦU TƯ DỰ ÁN",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
    items: [
      "Thẩm định cơ hội đầu tư",
      "Cấu trúc hợp tác vốn",
      "Triển khai dự án quy mô lớn",
    ],
  },
  {
    title: "BẤT ĐỘNG SẢN",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-3-1.webp",
    items: [
      "Nhà mặt đất & chung cư",
      "Shophouse tiềm năng",
      "Tài sản sinh lời dài hạn",
    ],
  },
  {
    title: "DỊCH VỤ & VẬN HÀNH",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-2-1.webp",
    items: [
      "Nhà hàng & khách sạn",
      "Mô hình cửa hàng",
      "Tối ưu vận hành doanh thu",
    ],
  },
  {
    title: "TƯ VẤN CHIẾN LƯỢC",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.webp",
    items: [
      "Định hướng danh mục",
      "Phân bổ nguồn lực",
      "Đồng hành minh bạch",
    ],
  },
] as const;

const whatWeDo = [
  {
    title: "Đầu tư dự án",
    description: "Tư vấn và triển khai các dự án quy mô lớn, tối ưu nguồn lực.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
  },
  {
    title: "Bất động sản",
    description: "Phát triển và kinh doanh nhà mặt đất, chung cư, shophouse.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-3-1.webp",
  },
  {
    title: "Nhà hàng & khách sạn",
    description: "Tư vấn đầu tư, vận hành theo tiêu chuẩn chuyên nghiệp.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-2-1.webp",
  },
  {
    title: "Dự án nhỏ & vừa",
    description: "Phương án linh hoạt theo ngân sách và mục tiêu từng nhà đầu tư.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
  },
] as const;

const team = [
  {
    name: "Nguyễn Minh Quân",
    role: "Giám đốc chiến lược đầu tư",
    initials: "MQ",
  },
  {
    name: "Trần Thu Hương",
    role: "Giám đốc phát triển dự án",
    initials: "TH",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Cố vấn vận hành",
    initials: "HN",
  },
] as const;

const achievements = [
  { value: "15+", label: "Năm kinh nghiệm" },
  { value: "120+", label: "Dự án đồng hành" },
  { value: "80+", label: "Đối tác tin cậy" },
  { value: "100%", label: "Minh bạch quy trình" },
] as const;

const partners = [
  "Đối tác A",
  "Đối tác B",
  "Đối tác C",
  "Đối tác D",
  "Đối tác E",
] as const;

export default async function Home() {
  const [products, posts] = await Promise.all([getProducts(4), getPosts(3)]);

  return (
    <div className="home-page">
      <HomeSlider />

      <section className="corp-section corp-section-muted">
        <div className="shell service-card-grid">
          {serviceCards.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="service-feature-card">
                <div className="service-feature-icon">
                  <Image
                    src={service.image}
                    alt=""
                    width={72}
                    height={72}
                    sizes="72px"
                  />
                </div>
                <h3>{service.title}</h3>
                <span className="gold-rule" aria-hidden="true" />
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="corp-section">
        <div className="shell roadmap-layout">
          <Reveal direction="left">
            <h2 className="corp-heading">Hành trình hợp tác</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Chúng tôi bắt đầu từ việc lắng nghe mục tiêu, thẩm định cơ hội và
              xây dựng phương án hợp tác rõ ràng — để mỗi quyết định đầu tư đều
              dựa trên dữ liệu, kinh nghiệm và sự minh bạch.
            </p>
            <Link
              href="/san-pham"
              className={cn(buttonVariants({ size: "lg" }), "gold-btn")}
            >
              Xem danh mục đầu tư <ArrowRight />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="roadmap-media">
              <Image
                src="https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-2-1.webp"
                alt="Không gian đầu tư và hợp tác"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="corp-section corp-section-muted">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Thành tựu đồng hành</h2>
            <span className="gold-rule" aria-hidden="true" />
          </Reveal>
          <div className="achievement-grid">
            {achievements.map((item, index) => (
              <Reveal key={item.label} delay={index * 80}>
                <div className="achievement-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Chúng tôi làm gì</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Từ ý tưởng ban đầu đến triển khai và vận hành, mỗi dịch vụ hướng tới
              biến nguồn lực thành giá trị thực.
            </p>
          </Reveal>
          <div className="what-we-do-grid">
            {(products.data.length
              ? products.data.map((product) => ({
                  key: product.id,
                  title: product.name,
                  description:
                    plainText(product.shortDescription).slice(0, 110) ||
                    "Cơ hội đầu tư đang mở.",
                  image:
                    product.image?.sourceUrl ??
                    "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
                  href: `/san-pham/${product.slug}`,
                }))
              : whatWeDo.map((item) => ({
                  key: item.title,
                  title: item.title,
                  description: item.description,
                  image: item.image,
                  href: "/san-pham",
                }))
            ).map((item, index) => (
              <Reveal key={item.key} delay={(index % 4) * 80}>
                <Link href={item.href} className="what-we-do-card">
                  <div className="what-we-do-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 760px) 100vw, 25vw"
                    />
                  </div>
                  <div className="what-we-do-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="section-action" delay={160}>
            <Link href="/san-pham" className={cn(buttonVariants({ size: "lg" }), "gold-btn")}>
              Xem toàn bộ danh mục <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="corp-section team-section">
        <div className="shell">
          <Reveal className="corp-section-heading light">
            <h2 className="corp-heading">Gặp đội ngũ</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Những người đứng sau mỗi quyết định có trách nhiệm — kết hợp tư duy
              đầu tư, phát triển dự án và vận hành thực tế.
            </p>
          </Reveal>
          <div className="team-portrait-grid">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <article className="team-portrait-card">
                  <div className="team-portrait-avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <div className="team-portrait-plate">
                    <span>{member.role}</span>
                    <strong>{member.name}</strong>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section corp-section-muted">
        <div className="shell clients-layout">
          <Reveal>
            <h2 className="corp-heading">Đối tác của chúng tôi</h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="partner-strip">
              {partners.map((name) => (
                <div className="partner-logo" key={name}>
                  {name}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="testimonial-card">
              <span className="testimonial-quote" aria-hidden="true">
                ”
              </span>
              <p>
                Quy trình làm việc rõ ràng, thông tin minh bạch và luôn đồng hành
                sát sao trong suốt hành trình hợp tác đầu tư.
              </p>
              <footer>
                <strong>Nhà đầu tư đồng hành</strong>
                <span>Đối tác chiến lược</span>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="corp-section">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Tin tức</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>Thông tin giúp bạn đầu tư chủ động hơn.</p>
          </Reveal>
          {posts.data.length ? (
            <Reveal delay={100}>
              <div className="content-grid">
                {posts.data.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </Reveal>
          ) : (
            <DataState
              isConfigured={posts.isConfigured}
              title="Tin tức WordPress sẽ xuất hiện tại đây"
              description="Kết nối WPGraphQL để đồng bộ những bài viết mới nhất."
            />
          )}
          <Reveal className="section-action" delay={140}>
            <Link href="/tin-tuc" className={cn(buttonVariants({ size: "lg" }), "gold-btn")}>
              Xem tất cả tin tức <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="corp-section contact-strip">
        <div className="shell contact-strip-layout">
          <Reveal direction="left">
            <h2 className="corp-heading">Liên hệ tư vấn</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Chia sẻ điều bạn đang quan tâm. Đội ngũ sẽ liên hệ để cùng làm rõ
              mục tiêu và hướng đi phù hợp.
            </p>
            <address className="contact-strip-address">
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              <span>{siteConfig.contact.address}</span>
            </address>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
