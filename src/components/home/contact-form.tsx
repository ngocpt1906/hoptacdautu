"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = [
      `Họ tên: ${name}`,
      `Điện thoại: ${phone}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      "Yêu cầu tư vấn đầu tư",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <div className="form-field">
          <Label htmlFor="contact-name">Họ và tên</Label>
          <Input id="contact-name" name="name" placeholder="Nguyễn Văn A" required />
        </div>
        <div className="form-field">
          <Label htmlFor="contact-phone">Số điện thoại</Label>
          <Input id="contact-phone" name="phone" type="tel" placeholder="09xx xxx xxx" required />
        </div>
      </div>
      <div className="form-field">
        <Label htmlFor="contact-email">Email</Label>
        <Input id="contact-email" name="email" type="email" placeholder="email@example.com" required />
      </div>
      <div className="form-field">
        <Label htmlFor="contact-message">Nội dung cần tư vấn</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Chia sẻ mục tiêu, nguồn lực hoặc dự án bạn đang quan tâm..."
          rows={6}
          required
        />
      </div>
      <Button className="contact-submit" size="lg" type="submit">
        Gửi yêu cầu tư vấn
      </Button>
    </form>
  );
}
