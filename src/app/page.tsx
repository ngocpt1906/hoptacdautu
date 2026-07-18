import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Building2, Handshake, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/home/contact-form";
import { HomeSlider } from "@/components/home/home-slider";
import { Reveal } from "@/components/home/reveal";
import { PostCard } from "@/components/news/post-card";
import { ProductCard } from "@/components/products/product-card";
import { DataState } from "@/components/shared/data-state";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { getPosts, getProducts } from "@/lib/wordpress/client";

const services = [
  {
    title: "Đầu tư dự án",
    description:
      "Tư vấn và triển khai các dự án quy mô lớn, tối ưu nguồn lực và hiệu quả kinh tế.",
    image: "/images/hop-tac-dau-tu.jpg",
  },
  {
    title: "Bất động sản",
    description:
      "Phát triển và kinh doanh nhà mặt đất, chung cư, shophouse cùng các tài sản tiềm năng.",
    image: "/images/bat-dong-san.jpg",
  },
  {
    title: "Nhà hàng & khách sạn",
    description:
      "Tư vấn đầu tư, vận hành và quản lý mô hình dịch vụ theo tiêu chuẩn chuyên nghiệp.",
    image: "/images/dau-tu-khach-san.jpg",
  },
  {
    title: "Cửa hàng & shophouse",
    description:
      "Giải pháp mặt bằng và mô hình kinh doanh giúp mở rộng hoạt động hiệu quả.",
    image: "/images/shop-house.jpg",
  },
  {
    title: "Dự án nhỏ & vừa",
    description:
      "Các phương án vừa sức, linh hoạt theo ngân sách và mục tiêu của từng nhà đầu tư.",
    image: "/images/dau-tu-nho-va-vua.jpg",
  },
  {
    title: "Góc ý tưởng",
    description:
      "Không gian chia sẻ mô hình mới, mở ra những hướng đi khác biệt cho dự án của bạn.",
    image: "/images/goc-i-tuong.jpg",
  },
] as const;

const team = [
  {
    name: "Nguyễn Minh Quân",
    role: "Giám đốc chiến lược đầu tư",
    initials: "MQ",
    description:
      "Phụ trách thẩm định cơ hội, xây dựng cấu trúc hợp tác và chiến lược phân bổ nguồn lực.",
  },
  {
    name: "Trần Thu Hương",
    role: "Giám đốc phát triển dự án",
    initials: "TH",
    description:
      "Điều phối các bên liên quan, theo sát tiến độ và chuyển hóa ý tưởng thành kế hoạch triển khai.",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Cố vấn vận hành",
    initials: "HN",
    description:
      "Tập trung vào hiệu quả vận hành, mô hình doanh thu và năng lực tăng trưởng dài hạn của dự án.",
  },
] as const;

const faqs = [
  {
    question: "Quy trình bắt đầu hợp tác đầu tư như thế nào?",
    answer:
      "Chúng tôi bắt đầu bằng một buổi trao đổi để hiểu mục tiêu, nguồn lực và khẩu vị rủi ro; sau đó mới đề xuất danh mục hoặc phương án phù hợp.",
  },
  {
    question: "Tôi có thể yêu cầu tư vấn cho một dự án đang có sẵn không?",
    answer:
      "Có. Đội ngũ có thể cùng bạn rà soát mô hình, khả năng triển khai, nhu cầu vốn và những đầu việc cần ưu tiên trước khi ra quyết định.",
  },
  {
    question: "Thông tin trên website có phải là cam kết lợi nhuận không?",
    answer:
      "Không. Nội dung trên website mang tính giới thiệu và tham khảo. Mọi cơ hội đầu tư đều cần được thẩm định kỹ và trao đổi trực tiếp trước khi hợp tác.",
  },
  {
    question: "Sau khi chọn danh mục đầu tư, tôi cần làm gì?",
    answer:
      "Bạn có thể thêm danh mục vào giỏ quan tâm rồi liên hệ qua điện thoại, Zalo, email hoặc biểu mẫu cuối trang để nhận tư vấn chi tiết.",
  },
] as const;

export default async function Home() {
  const [products, posts] = await Promise.all([getProducts(6), getPosts(3)]);

  return (
    <div className="home-page">
      <section className="cinematic-hero">
        <Image
          src="/images/appalachian-day.jpg"
          alt="Khung cảnh núi rừng rộng lớn tượng trưng cho tầm nhìn đầu tư dài hạn"
          fill
          priority
          sizes="100vw"
        />
        <div className="cinematic-hero-overlay" />
        <div className="cinematic-hero-content">
          <p className="hero-overline">Hợp tác đầu tư · Hà Nội</p>
          <h1>
            Kiến tạo giá trị.
            <em>Đồng hành dài hạn.</em>
          </h1>
          <p>
            Nơi nguồn lực, kinh nghiệm và những cơ hội có giá trị gặp nhau.
          </p>
          <div className="cinematic-hero-actions">
            <Link
              href="/san-pham"
              className={cn(buttonVariants({ size: "lg" }), "hero-primary-button")}
            >
              Khám phá cơ hội <ArrowRight />
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "hero-outline-button")}
            >
              Trao đổi cùng chúng tôi
            </a>
          </div>
        </div>
        <a className="hero-scroll" href="#featured-slider" aria-label="Cuộn xuống nội dung">
          <span>Khám phá</span>
          <ArrowDown />
        </a>
      </section>

      <section id="featured-slider" className="home-panel home-panel-dark slider-panel">
        <Reveal className="home-section-heading">
          <span>Danh mục nổi bật</span>
          <h2>Những không gian mở ra tiềm năng mới</h2>
          <p>
            Mỗi dự án là một câu chuyện về vị trí, con người và khả năng tạo ra
            giá trị bền vững.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <HomeSlider />
        </Reveal>
      </section>

      <section className="home-panel trust-panel">
        <Reveal className="trust-intro">
          <span className="section-index">01 · Vì sao chọn chúng tôi</span>
          <h2>Niềm tin được xây dựng từ sự minh bạch và năng lực thực thi.</h2>
          <p className="trust-lead">
            Chúng tôi hiểu rằng mọi quyết định đầu tư đều bắt đầu bằng niềm tin.
            Vì vậy, mỗi cơ hội được tiếp cận bằng dữ liệu, kinh nghiệm thực tế và
            sự thẳng thắn về cả tiềm năng lẫn rủi ro.
          </p>
        </Reveal>
        <div className="trust-grid">
          {[
            {
              icon: ShieldCheck,
              title: "Thẩm định có kỷ luật",
              text: "Mỗi cơ hội được xem xét từ mô hình kinh doanh, nguồn lực đến khả năng vận hành thực tế.",
            },
            {
              icon: Handshake,
              title: "Đồng hành minh bạch",
              text: "Thông tin rõ ràng, mục tiêu thống nhất và trao đổi trực tiếp trong suốt hành trình hợp tác.",
            },
            {
              icon: Building2,
              title: "Kinh nghiệm đa lĩnh vực",
              text: "Góc nhìn kết hợp giữa bất động sản, dịch vụ, bán lẻ và quản trị dự án.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <Card className="trust-card">
                <CardHeader>
                  <item.icon />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-panel services-panel">
        <Reveal className="home-section-heading">
          <span>02 · Dịch vụ của chúng tôi</span>
          <h2>Năng lực kết nối toàn bộ hành trình đầu tư</h2>
          <p>
            Từ ý tưởng ban đầu đến triển khai và vận hành, mỗi dịch vụ đều hướng
            tới một mục tiêu: biến nguồn lực thành giá trị thực.
          </p>
        </Reveal>
        <div className="service-showcase">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 100}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card className="service-image-card">
                <div className="service-card-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-panel home-panel-wine opportunities-panel">
        <Reveal className="home-section-heading light">
          <span>03 · Cơ hội đang mở</span>
          <h2>Danh mục dành cho những nhà đầu tư chủ động</h2>
        </Reveal>
        <Reveal delay={120}>
          {products.data.length ? (
            <div className="content-grid">
              {products.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <DataState
              isConfigured={products.isConfigured}
              title="Danh mục đầu tư sẽ xuất hiện tại đây"
              description="Kết nối WooGraphQL để đồng bộ các cơ hội đầu tư hiện có."
            />
          )}
        </Reveal>
        <Reveal className="section-action" delay={180}>
          <Link href="/san-pham" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Xem toàn bộ danh mục <ArrowRight />
          </Link>
        </Reveal>
      </section>

      <section className="home-panel team-panel">
        <Reveal className="home-section-heading">
          <span>04 · Đội ngũ</span>
          <h2>Những người đứng sau mỗi quyết định có trách nhiệm</h2>
          <p>
            Một đội ngũ kết hợp giữa tư duy đầu tư, năng lực phát triển dự án và
            kinh nghiệm vận hành thực tế.
          </p>
        </Reveal>
        <div className="team-grid">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 120}>
              <Card className="team-card">
                <CardHeader>
                  <div className="default-avatar m-auto" aria-hidden="true" >
                    {member.initials}
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{member.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-panel news-panel">
        <Reveal className="home-section-heading">
          <span>05 · Góc nhìn mới</span>
          <h2>Thông tin giúp bạn đầu tư chủ động hơn</h2>
        </Reveal>
        <Reveal delay={120}>
          {posts.data.length ? (
            <div className="content-grid">
              {posts.data.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <DataState
              isConfigured={posts.isConfigured}
              title="Tin tức WordPress sẽ xuất hiện tại đây"
              description="Kết nối WPGraphQL để đồng bộ những bài viết mới nhất."
            />
          )}
        </Reveal>
      </section>

      <section className="home-panel faq-panel">
        <div className="faq-layout">
          <Reveal direction="left">
            <span className="section-index">06 · Câu hỏi thường gặp</span>
            <h2>Những điều bạn có thể muốn biết trước khi bắt đầu.</h2>
            <p>
              Đây là thông tin khởi đầu. Chúng tôi luôn khuyến khích một cuộc
              trao đổi trực tiếp cho từng trường hợp cụ thể.
            </p>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <Accordion className="faq-accordion">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="home-panel home-panel-dark contact-home-panel">
        <div className="contact-home-layout">
          <Reveal direction="left">
            <span className="section-index">07 · Liên hệ</span>
            <h2>Một cuộc trao đổi có thể là khởi đầu của cơ hội tiếp theo.</h2>
            <p>
              Chia sẻ điều bạn đang quan tâm. Đội ngũ sẽ liên hệ để cùng làm rõ
              mục tiêu và hướng đi phù hợp.
            </p>
            <address>
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
