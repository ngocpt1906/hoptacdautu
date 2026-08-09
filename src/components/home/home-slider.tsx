"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    src: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-1-2.webp",
    alt: "Hợp tác đầu tư bất động sản đô thị",
  },
  {
    src: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-3-1.webp",
    alt: "Cơ hội đầu tư shophouse và mặt bằng kinh doanh",
  },
  {
    src: "https://hoptacdautu.vn/wp-content/uploads/hoptacdautu.vn-2-1.webp",
    alt: "Đầu tư mô hình dịch vụ nhà hàng khách sạn",
  },
] as const;

export function HomeSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

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
            className={`slider-slide is-contain${index === activeSlide ? " is-active" : ""}`}
            aria-hidden={index !== activeSlide}
            key={slide.src}
          >
            <Image
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              src={slide.src}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}

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
