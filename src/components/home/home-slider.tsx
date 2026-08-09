"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
    alt: "Hợp tác đầu tư bất động sản đô thị",
    kicker: "Pháp lý · Vốn · Cơ hội",
    title: "Đầu tư có thẩm định — không chỉ có lời hứa lợi nhuận",
    description:
      "Ths. Luật sư Đặng Minh Quang đồng hành thẩm định hồ sơ, cấu trúc hợp tác và bảo vệ quyền lợi nhà đầu tư.",
  },
  {
    src: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-3-1.webp",
    alt: "Cơ hội đầu tư shophouse và mặt bằng kinh doanh",
    kicker: "Bất động sản & mặt bằng",
    title: "Tài sản đúng vị trí, hồ sơ đúng pháp lý",
    description:
      "Từ nhà ở, shophouse đến mặt bằng thương mại — mỗi cơ hội được rà soát điều kiện pháp lý trước khi giải ngân.",
  },
  {
    src: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-2-1.webp",
    alt: "Đầu tư mô hình dịch vụ nhà hàng khách sạn",
    kicker: "Dịch vụ & vận hành",
    title: "Mô hình kinh doanh rõ ràng, hợp đồng ràng buộc rõ ràng",
    description:
      "Kết nối dự án dịch vụ, F&B và vận hành với khung hợp tác minh bạch và giám sát theo giai đoạn.",
  },
] as const;

export function HomeSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const current = slides[activeSlide];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % slides.length);
    }, 6_000);

    return () => window.clearInterval(interval);
  }, []);

  function showPrevious() {
    setActiveSlide((slide) => (slide - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveSlide((slide) => (slide + 1) % slides.length);
  }

  return (
    <section
      className="home-slider corporate-slider"
      aria-label="Giới thiệu hợp tác đầu tư"
      aria-roledescription="carousel"
    >
      <div className="slider-stage">
        {slides.map((slide, index) => (
          <div
            className={`slider-slide${index === activeSlide ? " is-active" : ""}`}
            aria-hidden={index !== activeSlide}
            key={slide.src}
          >
            <Image
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              src={slide.src}
            />
          </div>
        ))}

        <div className="slider-overlay" aria-hidden="true" />

        <div className="slider-caption">
          <div className="shell">
            <p>{current.kicker}</p>
            <h2>{current.title}</h2>
            <span className="slider-lead">{current.description}</span>
            <div className="slider-actions">
              <Link
                href="/gioi-thieu"
                className={cn(buttonVariants({ size: "lg" }), "gold-btn")}
              >
                Về người sáng lập
              </Link>
              <Link
                href="/san-pham"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "slider-secondary-btn")}
              >
                Xem danh mục đầu tư
              </Link>
            </div>
          </div>
        </div>

        <Button
          className="slider-arrow slider-arrow-left"
          type="button"
          variant="outline"
          size="icon-lg"
          aria-label="Ảnh trước"
          onClick={showPrevious}
        >
          ‹
        </Button>
        <Button
          className="slider-arrow slider-arrow-right"
          type="button"
          variant="outline"
          size="icon-lg"
          aria-label="Ảnh tiếp theo"
          onClick={showNext}
        >
          ›
        </Button>

        <div className="slider-dots" aria-label="Chọn ảnh trình chiếu">
          {slides.map((slide, index) => (
            <button
              className={index === activeSlide ? "is-active" : ""}
              type="button"
              aria-label={`Hiển thị ảnh ${index + 1}`}
              aria-current={index === activeSlide}
              key={slide.src}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="slider-gold-bar" aria-hidden="true" />
    </section>
  );
}
