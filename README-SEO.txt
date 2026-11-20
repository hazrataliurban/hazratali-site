VERCEL PAR KAISE DAALEIN (SEO PACK)
-----------------------------------
Folder ke andar ye sab ek saath upload / deploy karein (index.html ka naam wahi rakhein):

  index.html          <- website (hazrat-ali-INDEX-v14-seo.html ko rename karke)
  vercel.json         <- /about, /gold jaise saaf links aur sitemap.xml / robots.txt chalane ke liye
  api/sitemap.js      <- sitemap.xml banata hai (domain apne aap pata karta hai)
  api/robots.js       <- robots.txt banata hai
  favicon.png, icon-512.png, og-image.png   <- Google / WhatsApp me dikhne wali photo

Deploy ke baad in links ko browser me kholkar jaanchein:
  https://aapki-site/sitemap.xml
  https://aapki-site/robots.txt
  https://aapki-site/about       (About page khulna chahiye)

Phir Admin -> "SEO Studio (Google)" me:
  1) "Apni website ka poora link" bharein
  2) Google Search Console ka code bharein, Save karein
  3) Search Console me Sitemaps -> sitemap.xml submit karein
  4) URL Inspection -> Request Indexing
Google Business Profile (business.google.com) bhi banayein: Maps me "Hazrat Ali Urban" isi se dikhta hai.
