RIFFAT DIGITAL POINT — PRO HOMEPAGE
======================================

এই version-এ আছে:
• Home page-এর 4টি hero/banner photo
• 12 সেকেন্ড পরপর automatic slider change
• Previous/Next button + dots
• Services-এর প্রতিটি card-এ আলাদা photo + title
• Service/Post-এ click করলে বড় image + full details modal
• Mobile responsive design
• Public page-এ Admin button নেই

4টি Hero Photo কোথায় বদলাবেন:
assets/hero/slide1.jpg
assets/hero/slide2.svg
assets/hero/slide3.svg
assets/hero/slide4.svg

Auto change time:
app.js-এর প্রথম লাইনে HERO_SECONDS = 12
10 বা 15 করতে চাইলে 10/15 লিখবেন।

Service photo বদলাতে:
assets/services/service1.svg ... service10.svg
তারপর app.js-এর services array-তে image filename মিলিয়ে রাখবেন।

Service title/details বদলাতে:
app.js-এর services array edit করবেন।

Post photo + title + full details:
app.js-এর posts array edit করবেন।

GitHub:
index.html, style.css, app.js এবং পুরো assets folder upload করবেন।
