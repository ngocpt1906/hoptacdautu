const phone = "0973166999";

export const siteInfo = {
  name: "Hợp tác đầu tư",
  description:
    "Kết nối nguồn lực, kiến tạo cơ hội và đồng hành cùng những dự án đầu tư bền vững.",
  websiteUrl: "https://hoptacdautu.vn",
  contact: {
    phone,
    phoneHref: `tel:${phone.replace(/\s/g, "")}`,
    email: "Ls.quangminhdang@gmail.com",
    address: "Số 57 Cù Chính Lan, Khương Mai, Thanh Xuân, Hà Nội",
    zalo: phone,
  },
} as const;
