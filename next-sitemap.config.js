/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://thefarmhouse.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () => [
    { loc: "/", changefreq: "daily", priority: 1.0 },
    { loc: "/gallery", changefreq: "monthly", priority: 0.8 },
    { loc: "/booking", changefreq: "weekly", priority: 0.9 },
    { loc: "/contact", changefreq: "monthly", priority: 0.7 },
  ],
};
