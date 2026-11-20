// Vercel: /api/sitemap.js  (sitemap.xml isi se banta hai, domain apne aap pata chalta hai)
const PAGES = ["home","about","team","financials","governance","appointment","halalpool","services","online","deposit","loan","calculator","gold","savings","eligibility","membership","gallery","calendar","blog","agm","welfare","contact"];
module.exports = (req, res) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const base = 'https://' + host;
  const d = new Date().toISOString().slice(0, 10);
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    PAGES.map((r, i) => '  <url><loc>' + base + (r === 'home' ? '/' : '/' + r) + '</loc><lastmod>' + d + '</lastmod><changefreq>' + (i ? 'monthly' : 'weekly') + '</changefreq><priority>' + (i ? '0.7' : '1.0') + '</priority></url>').join('\n') + '\n</urlset>\n';
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(xml);
};
