import Image from "next/image";
import Link from "next/link";
import { CartLink } from "@/components/cart/cart-link";
import { mainNavigation, siteConfig } from "@/config/site";

function Navigation() {
  return (
    <>
      {mainNavigation.map((item) => (
        <Link href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Đồng hành cùng dự án của bạn</span>
          <a href={siteConfig.contact.phoneHref}>
            Hotline: {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Hợp tác đầu tư - Trang chủ">
          <Image
            className="brand-logo"
            src="https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.webp"
            alt=""
            width={500}
            height={322}
            priority
            sizes="150px"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Navigation />
        </nav>

        <div className="header-actions">
          <a className="header-cta" href={siteConfig.contact.phoneHref}>
            Liên hệ
          </a>
          <CartLink />
          <details className="mobile-menu">
            <summary aria-label="Mở menu">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Điều hướng di động">
              <Navigation />
              <Link href="/gio-hang">Giỏ hàng</Link>
              <a href={siteConfig.contact.phoneHref}>
                Gọi {siteConfig.contact.phone}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
