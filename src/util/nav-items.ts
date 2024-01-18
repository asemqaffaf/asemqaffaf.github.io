// export default {};

// BUSINESS
// Blog

// HOME ABOUT PORTFOLIO CONTACT
export const navigation = [
  // news should be -> About
  { name: "Home", href: "/", index: 0 },
  { name: "About", href: "/company", index: 1 },
  { name: "Portfolio", href: "/news", index: 2 },
  // { name: "Services", href: "/services", index: 3 },
  { name: "Contact", href: "/contact", index: 4 },
] as const;

export const languages = [
  { name: "🇺🇲 | English (US)", value: "en" },
  { name: "🇯🇵 | 日本語", value: "ja" },
];
