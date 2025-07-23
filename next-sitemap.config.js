/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ceranco.com.tr',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 9999,
  outDir: './public',
}
