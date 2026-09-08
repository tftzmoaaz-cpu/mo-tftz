# TFTZ LiveHub — Cloudflare Pages

نسخة Static متوافقة مع Cloudflare Pages، مع استرجاع:
- Instagram داخل بطاقة مستقلة.
- قسم آخر فيديوهات YouTube.
- لا يوجد Worker أو Wrangler أو Node.js.
- لا يوجد YouTube API Key.
- Kick وTikTok وباقي الروابط كما هي.

## الرفع على Cloudflare Pages
1. فك الضغط.
2. ارفع محتويات مجلد `TFTZ-LiveHub`.
3. Build command: اتركه فارغاً.
4. Output directory: نفس المجلد الذي يحتوي على `index.html`.

## ملاحظة YouTube
آخر الفيديوهات يتم جلبها من RSS bridge خارجي حتى يظل الموقع Static. إذا منع مزود الـRSS الطلب، يظهر زر مباشر لقناة YouTube بدلاً من كسر الصفحة.

## ملاحظة Instagram
تمت إضافة Instagram embed داخل البطاقة مع fallback تلقائي لرابط الحساب إذا منع Instagram التضمين.
