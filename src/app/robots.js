export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/login"],
    },
    sitemap: "https://www.webkorps.com/sitemap.xml",
    host: "https://www.webkorps.com",
  };
}
