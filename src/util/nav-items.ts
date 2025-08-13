export const navigationElements = [
  { name: "home", href: "/", index: 0 },
  { name: "about", href: "/company", index: 1 },
  { name: "portfolio", href: "/news", index: 2 },
  { name: "contact", href: "/contact", index: 3 },
  // { name: "news", href: "/news", index: 4 },
] as const;

export const languagesList = [
  { name: "English", value: "en" },
  { name: "日本語", value: "jp" },
  { name: "Deutsch", value: "de" },
  { name: "العربيه", value: "ar" },
] as const;

export type LanguageType = (typeof languagesList)[number]["value"];
