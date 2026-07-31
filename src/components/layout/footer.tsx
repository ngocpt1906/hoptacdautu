import Image from "next/image";
import Link from "next/link";
import { mainNavigation, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-about">
          <Link className="brand" href="/">
            <Image
              className="brand-logo footer-logo"
              src="https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.webp"
              alt={siteConfig.name}
              width={500}
              height={322}
              sizes="170px"
            />
          </Link>
          <p>{siteConfig.description}</p>
        </div>

        <div>
          <h2>Khám phá</h2>
          <nav className="footer-links" aria-label="Điều hướng cuối trang">
            {mainNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/gio-hang">Giỏ hàng</Link>
          </nav>
        </div>

        <div>
          <h2>Liên hệ</h2>
          <address className="footer-contact">
            <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <span>{siteConfig.contact.address}</span>
          </address>
        </div>

        <div className="footer-newsletter">
          <h2>Đăng ký nhận tin</h2>
          <p>Nhận thông tin cơ hội đầu tư và cập nhật mới qua email.</p>
          <a className="footer-newsletter-btn" href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Đăng ký nhận tin")}`}>
            Gửi email đăng ký
          </a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>Thông tin chỉ mang tính tham khảo đầu tư.</span>
      </div>
    </footer>
  );
}
