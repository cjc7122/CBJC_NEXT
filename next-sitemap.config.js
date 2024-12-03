/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cbjv.com', // Replace with your actual website URL
    generateRobotsTxt: true, // Generate a robots.txt file
    sitemapSize: 5000, // Maximum number of URLs per sitemap file
    priority: 0.7, // Default priority for URLs
    changefreq: 'monthly', // How often pages are likely to change (e.g., 'daily', 'weekly')
    exclude: ['/admin', '/api/*'], // Exclude any non-public pages or routes
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Allow all bots to crawl all pages
      ],
      additionalSitemaps: [
        'https://cbjv.com/sitemap.xml', // Additional sitemaps if needed
      ],
    },
  };
  