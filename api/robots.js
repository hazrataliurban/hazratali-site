// Vercel: /api/robots.js  (robots.txt isi se banta hai)
module.exports = (req, res) => {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /portal',
    'Disallow: /staffportal',
    'Disallow: /verify',
    'Disallow: /api/',
    '',
    'Sitemap: https://' + host + '/sitemap.xml',
    ''
  ].join('\n');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600');
  res.status(200).send(body);
};
