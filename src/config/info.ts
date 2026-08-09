const phone = "0973166999";

export const siteInfo = {
  name: "Hợp tác đầu tư",
  description:
    "Nền tảng hợp tác đầu tư do Ths. Luật sư Đặng Minh Quang định hướng — thẩm định pháp lý, cấu trúc vốn minh bạch và kết nối cơ hội bất động sản, dịch vụ, dự án doanh nghiệp tại Việt Nam.",
  websiteUrl: "https://hoptacdautu.vn",
  contact: {
    phone,
    phoneHref: `tel:${phone.replace(/\s/g, "")}`,
    email: "Ls.quangminhdang@gmail.com",
    address: "Số 57 Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội",
    zalo: phone,
  },
} as const;
