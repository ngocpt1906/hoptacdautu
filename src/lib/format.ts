const entities: Record<string, string> = {
  "&amp;": "&",
  "&quot;": '"',
  "&#039;": "'",
  "&lt;": "<",
  "&gt;": ">",
  "&nbsp;": " ",
};

export function plainText(html = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&(?:amp|quot|#039|lt|gt|nbsp);/g, (entity) => entities[entity] ?? entity)
    .replace(/\s+/g, " ")
    .trim();
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function decodeEntities(value = "") {
  return value
    .replace(/&(?:amp|quot|#039|lt|gt|nbsp);/g, (entity) => entities[entity] ?? entity)
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    );
}

export function displayPrice(price?: string | null) {
  const decoded = decodeEntities(price ?? "").replace(/\s+/g, " ").trim();
  return decoded || "Liên hệ";
}
