import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/home/contact-form";
import { HomeSlider } from "@/components/home/home-slider";
import { Reveal } from "@/components/home/reveal";
import { PostCard } from "@/components/news/post-card";
import { DataState } from "@/components/shared/data-state";
import { buttonVariants } from "@/components/ui/button";
import {
  achievements,
  companyAbout,
  founder,
  partners,
  testimonials,
} from "@/config/content";
import { siteConfig } from "@/config/site";
import { plainText } from "@/lib/format";
import { cn } from "@/lib/utils";
import { getPosts, getProducts } from "@/lib/wordpress/client";

const fallbackProjects = [
  {
    title: "Đầu tư dự án",
    description:
      "Thẩm định cơ hội, cấu trúc vốn và đồng hành triển khai các dự án quy mô lớn đến vừa.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
  },
  {
    title: "Bất động sản",
    description:
      "Nhà ở, chung cư, shophouse và mặt bằng thương mại — ưu tiên hồ sơ pháp lý rõ ràng.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-3-1.webp",
  },
  {
    title: "Nhà hàng & khách sạn",
    description:
      "Mô hình dịch vụ có dòng tiền vận hành, gắn với khung hợp đồng và giám sát minh bạch.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-2-1.webp",
  },
  {
    title: "Dự án nhỏ & vừa",
    description:
      "Phương án linh hoạt theo ngân sách — từ vài trăm triệu đến hợp tác góp vốn theo giai đoạn.",
    image: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
  },
] as const;

export default async function Home() {
  const [products, posts] = await Promise.all([getProducts(4), getPosts(3)]);

  return (
    <div className="home-page">
      <HomeSlider />

      <section className="corp-section corp-section-muted">
        <div className="shell service-card-grid">
          {companyAbout.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="service-feature-card">
                <div className="service-feature-icon">
                  <Image
                    src={
                      [
                        "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
                        "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-3-1.webp",
                        "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-2-1.webp",
                        "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.webp",
                      ][index] ??
                      "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.webp"
                    }
                    alt=""
                    width={72}
                    height={72}
                    sizes="72px"
                  />
                </div>
                <h3>{service.title.toUpperCase()}</h3>
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

      <section className="corp-section founder-spotlight">
        <div className="shell founder-spotlight-layout">
          <Reveal direction="left">
            <div className="founder-portrait">
              <Image
                src={founder.image}
                alt={founder.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                priority
                className="founder-portrait-img"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <p className="section-kicker">Người sáng lập</p>
            <h2 className="corp-heading">{founder.name}</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="founder-title">{founder.title}</p>
            <ul className="founder-roles">
              {founder.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p className="founder-lead">{founder.headline}</p>
            <p>{founder.summary}</p>
            <p>{founder.bio[0]}</p>
            <div className="founder-actions">
              <Link
                href="/gioi-thieu"
                className={cn(buttonVariants({ size: "lg" }), "gold-btn")}
              >
                Hồ sơ chuyên môn đầy đủ <ArrowRight />
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                Gọi {siteConfig.contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="corp-section corp-section-muted">
        <div className="shell roadmap-layout">
          <Reveal direction="left">
            <h2 className="corp-heading">Hành trình hợp tác có kiểm soát</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Chúng tôi bắt đầu từ việc lắng nghe mục tiêu tài chính và khẩu vị
              rủi ro, sau đó thẩm định pháp lý – năng lực đối tác – cấu trúc dòng
              tiền trước khi đề xuất phương án hợp tác. Mỗi bước đều hướng tới
              một quyết định đầu tư dựa trên dữ liệu, hợp đồng rõ ràng và sự
              minh bạch thông tin — không dựa vào cảm tính hay lời hứa miệng.
            </p>
            <ol className="process-list">
              {companyAbout.process.map((item) => (
                <li key={item.step}>
                  <strong>
                    {item.step}. {item.title}
                  </strong>
                  <span>{item.description}</span>
                </li>
              ))}
            </ol>
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
                alt="Không gian tư vấn và hợp tác đầu tư"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="corp-section">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Năng lực đồng hành</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Số liệu phản ánh định hướng làm việc: ưu tiên bề dày pháp lý, phạm
              vi lĩnh vực và tính minh bạch trong từng hồ sơ hợp tác.
            </p>
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

      <section className="corp-section corp-section-muted">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Chuyên môn pháp lý trên thị trường đầu tư</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Từ thẩm định dự án đến cấu trúc góp vốn — mỗi mảng đều gắn với kinh
              nghiệm tư vấn đất đai, bất động sản, doanh nghiệp và thương mại.
            </p>
          </Reveal>
          <div className="expertise-grid">
            {founder.expertise.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="expertise-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Cơ hội đầu tư nổi bật</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Từ ý tưởng đến triển khai và vận hành — mỗi danh mục hướng tới biến
              nguồn lực thành giá trị thực, với thông tin đủ để nhà đầu tư đánh
              giá trước khi quyết định.
            </p>
          </Reveal>
          <div className="what-we-do-grid">
            {(products.data.length
              ? products.data.map((product) => ({
                  key: product.id,
                  title: product.name,
                  description:
                    plainText(product.shortDescription).slice(0, 140) ||
                    "Cơ hội đầu tư đang mở — liên hệ để nhận hồ sơ chi tiết và tư vấn pháp lý.",
                  image:
                    product.image?.sourceUrl ??
                    "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
                  href: `/san-pham/${product.slug}`,
                }))
              : fallbackProjects.map((item) => ({
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
            <h2 className="corp-heading">Nguyên tắc làm việc</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Ba nguyên tắc cốt lõi định hình cách Hợp tác đầu tư đồng hành cùng
              nhà đầu tư — dưới sự dẫn dắt chuyên môn của Luật sư Đặng Minh Quang.
            </p>
          </Reveal>
          <div className="principles-grid">
            {founder.principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <article className="principle-card">
                  <span className="principle-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section corp-section-muted">
        <div className="shell clients-layout">
          <Reveal>
            <h2 className="corp-heading">Đối tác & hệ sinh thái</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="clients-lead">
              Hệ sinh thái kết nối tư vấn pháp lý chuyên sâu với chủ dự án, nhà
              đầu tư cá nhân và doanh nghiệp SME đang tìm kiếm cấu trúc hợp tác
              rõ ràng.
            </p>
            <div className="partner-strip">
              {partners.map((name) => (
                <div className="partner-logo" key={name}>
                  {name}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="testimonial-stack">
              {testimonials.map((item) => (
                <blockquote className="testimonial-card" key={item.name}>
                  <span className="testimonial-quote" aria-hidden="true">
                    ”
                  </span>
                  <p>{item.quote}</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="corp-section">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Tin tức & góc nhìn đầu tư</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Cập nhật cơ hội, xu hướng mô hình kinh doanh và thông tin giúp bạn
              đầu tư chủ động hơn — kèm góc nhìn thẩm định thực tế.
            </p>
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
            <h2 className="corp-heading">Liên hệ tư vấn đầu tư & pháp lý</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Chia sẻ mục tiêu vốn, lĩnh vực quan tâm và thời gian nắm giữ. Đội
              ngũ sẽ liên hệ để làm rõ cơ hội phù hợp và các điểm pháp lý cần
              thẩm định trước khi bạn quyết định giải ngân.
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
