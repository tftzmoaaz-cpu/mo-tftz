const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('done'),600));
for(let i=0;i<45;i++){let p=document.createElement('i');p.className='particle';p.style.left=Math.random()*100+'%';p.style.animationDuration=7+Math.random()*13+'s';p.style.animationDelay=-Math.random()*15+'s';$('#particles').appendChild(p)}
const dot=$('.cursor-dot'),ring=$('.cursor-ring');addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';ring.animate({left:e.clientX+'px',top:e.clientY+'px'},{duration:150,fill:'forwards'})});
$$('a,button').forEach(x=>{x.onmouseenter=()=>{ring.style.width='50px';ring.style.height='50px'};x.onmouseleave=()=>{ring.style.width='34px';ring.style.height='34px'}});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(x=>obs.observe(x));
$('#fxBtn').onclick=()=>document.body.classList.toggle('no-fx');
$('#langBtn').onclick=()=>alert('الواجهة الأساسية بالعربي — يمكن إضافة ترجمة كاملة لكل الأقسام لاحقًا.');


// ===== YouTube latest videos =====
// Uses a public RSS bridge so the site stays static and Cloudflare Pages-compatible.
// No API key, Worker, Node.js or Wrangler is required.
const ytGrid = document.querySelector('#ytGrid');
const ytStatus = document.querySelector('#ytStatus');

function esc(v){
  return String(v||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function videoIdFrom(link){
  const m=String(link||'').match(/(?:v=|youtu\.be\/|\/shorts\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : '';
}
function loadYouTube(){
  const ytStatus=document.getElementById('ytStatus');
  const ytGrid=document.getElementById('ytGrid');
  if(!ytGrid) return;
  if(ytStatus) ytStatus.textContent='أحدث فيديوهات TFTZ';
  ytGrid.innerHTML = `
    <a class="yt-card reveal" href="https://www.youtube.com/@TFTZMo3az/videos" target="_blank" rel="noopener">
      <div class="yt-thumb"><div></div></div>
      <div class="yt-info"><strong>مشاهدة أحدث فيديوهات TFTZ</strong><small>YouTube</small></div>
    </a>
    <a class="yt-card reveal" href="https://www.youtube.com/@TFTZMo3az" target="_blank" rel="noopener">
      <div class="yt-thumb"><div></div></div>
      <div class="yt-info"><strong>قناة TFTZ الرسمية</strong><small>YouTube</small></div>
    </a>`;
  ytGrid.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
}
loadYouTube();

// If Instagram blocks the profile iframe, reveal the direct-link fallback.
const instaFrame=document.querySelector('#instagramBox iframe');
const instaFallback=document.querySelector('#instagramBox .social-fallback');
if(instaFrame){
  let instaTimer=setTimeout(()=>{if(instaFallback) instaFallback.style.display='flex'},5000);
  instaFrame.addEventListener('load',()=>clearTimeout(instaTimer));
}

