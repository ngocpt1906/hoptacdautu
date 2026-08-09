import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/home/contact-form";
import { Reveal } from "@/components/home/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  achievements,
  companyAbout,
  founder,
} from "@/config/content";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu Hợp tác đầu tư và hồ sơ chuyên môn của Ths. Luật sư Đặng Minh Quang — Phó Giám đốc Công ty Luật TNHH MTV Công Phúc, cố vấn pháp lý chiến lược trên thị trường đầu tư.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="shell about-hero-layout">
          <Reveal direction="left">
            <p className="section-kicker">Về chúng tôi</p>
            <h1 className="corp-heading">{companyAbout.name}</h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="about-hero-tagline">{companyAbout.tagline}</p>
            <p>{companyAbout.intro}</p>
            <p>{companyAbout.mission}</p>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="about-hero-stats">
              {achievements.map((item) => (
                <div className="achievement-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="corp-section founder-profile">
        <div className="shell founder-profile-layout">
          <Reveal direction="left">
            <div className="founder-portrait founder-portrait-lg">
              <Image
                src={founder.image}
                alt={founder.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 420px"
                className="founder-portrait-img"
              />
            </div>
            <div className="founder-nameplate">
              <span>{founder.firm}</span>
              <strong>Phó Giám đốc</strong>
              <em>{founder.name}</em>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <p className="section-kicker">Người sáng lập & cố vấn pháp lý</p>
            <h2 className="corp-heading">{founder.shortName}</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="founder-title">{founder.title}</p>
            <ul className="founder-roles">
              {founder.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p className="founder-lead">{founder.headline}</p>
            {founder.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <a
              href={founder.firmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Xem Công ty Luật Công Phúc
            </a>
          </Reveal>
        </div>
      </section>

      <section className="corp-section corp-section-muted">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Hồ sơ chuyên môn</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Các trụ cột năng lực giúp Luật sư Đặng Minh Quang đồng hành cùng
              nhà đầu tư trên thị trường bất động sản, dịch vụ và doanh nghiệp.
            </p>
          </Reveal>
          <div className="credential-grid">
            {founder.credentials.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <article className="credential-card">
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Lĩnh vực tư vấn sâu</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Không chỉ giới thiệu cơ hội — mà làm rõ điều kiện pháp lý, cấu trúc
              vốn và biên độ rủi ro trước khi nhà đầu tư giải ngân.
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

      <section className="corp-section corp-section-muted">
        <div className="shell">
          <Reveal className="corp-section-heading">
            <h2 className="corp-heading">Dịch vụ của Hợp tác đầu tư</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>{companyAbout.vision}</p>
          </Reveal>
          <div className="about-service-grid">
            {companyAbout.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <article className="about-service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section">
        <div className="shell roadmap-layout">
          <Reveal direction="left">
            <h2 className="corp-heading">Quy trình đồng hành 4 bước</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Mỗi hợp tác đều đi qua cùng một khung kiểm soát: mục tiêu rõ — thẩm
              định đủ — cấu trúc chắc — triển khai có giám sát. Cách làm này giúp
              giảm rủi ro “đầu tư theo cảm tính” và tăng khả năng bảo vệ quyền
              lợi khi dự án lệch kế hoạch.
            </p>
            <Link
              href="/san-pham"
              className={cn(buttonVariants({ size: "lg" }), "gold-btn")}
            >
              Khám phá danh mục đầu tư <ArrowRight />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <ol className="process-list process-list-boxed">
              {companyAbout.process.map((item) => (
                <li key={item.step}>
                  <strong>
                    {item.step}. {item.title}
                  </strong>
                  <span>{item.description}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="corp-section team-section">
        <div className="shell">
          <Reveal className="corp-section-heading light">
            <h2 className="corp-heading">Vì sao nhà đầu tư chọn chúng tôi</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Sự khác biệt nằm ở việc đặt pháp lý và cấu trúc hợp đồng ngang hàng
              với câu chuyện lợi nhuận — ngay từ vòng tư vấn đầu tiên.
            </p>
          </Reveal>
          <div className="why-grid">
            {companyAbout.whyUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="why-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section contact-strip">
        <div className="shell contact-strip-layout">
          <Reveal direction="left">
            <h2 className="corp-heading">Đặt lịch trao đổi với đội ngũ</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p>
              Nếu bạn đang cân nhắc góp vốn, mua tài sản sinh lời hoặc hợp tác
              vận hành mô hình dịch vụ, hãy để lại thông tin. Chúng tôi sẽ liên hệ
              để làm rõ mục tiêu và các hạng mục pháp lý cần thẩm định trước.
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
