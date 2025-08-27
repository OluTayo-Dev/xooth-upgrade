// generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Replace this with your actual live URL
const hostname = 'https://xooth.net';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more static routes or loop dynamic ones from a file
];

const stream = new SitemapStream({ hostname });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('✅ Sitemap generated!');
});
