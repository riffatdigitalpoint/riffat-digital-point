const HERO_SECONDS = 12; // 10, 12, 15... আপনার পছন্দমতো বদলাতে পারবেন

const heroImages = [
  "assets/hero/slide1.jpg",
  "assets/hero/slide2.svg",
  "assets/hero/slide3.svg",
  "assets/hero/slide4.svg"
];

const services = [
  {title:"Ayushman Bharat Card", image:"assets/services/service1.svg", text:"আয়ুষ্মান ভারত কার্ড সংক্রান্ত পরিষেবা, KYC ও ডাউনলোড সহ সহায়তা।"},
  {title:"PVC Card Printing", image:"assets/services/service2.svg", text:"Professional PVC Card Printing — Wholesale & Retail দু’ধরনের অর্ডার নেওয়া হয়।"},
  {title:"Ration Card Services", image:"assets/services/service3.svg", text:"নতুন রেশন কার্ড আবেদন, সংশোধন এবং অন্যান্য রেশন সংক্রান্ত কাজ।"},
  {title:"Census 2027", image:"assets/services/service4.svg", text:"জনগণনা ২০২৭ সংক্রান্ত অনলাইন কাজ ও সহায়তা।"},
  {title:"Scholarship & Education", image:"assets/services/service5.svg", text:"স্কলারশিপ ও শিক্ষা সংক্রান্ত খবর, আবেদন এবং অনলাইন সহায়তা।"},
  {title:"Kisan Bandhu", image:"assets/services/service6.svg", text:"কৃষক বন্ধু সংক্রান্ত কাজ ও অনলাইন সহায়তা।"},file_0000000046948211b12a03f7f9938713.png
  {title:"Pension Services", image:"assets/services/service7.svg", text:"পেনশন সংক্রান্ত ডকুমেন্ট জমা ও অন্যান্য ডিজিটাল পরিষেবা।"},
  {title:"Voter PVC Card", image:"assets/services/service8.svg", text:"ভোটার কার্ড সংক্রান্ত কাজ ও PVC Card Printing।"},
  {title:"PAN Card Update", image:"assets/services/service9.svg", text:"PAN কার্ড আপডেট, সংশোধন ও সম্পর্কিত অনলাইন পরিষেবা।"},
  {title:"Online Form Fill-up", image:"assets/services/service10.svg", text:"বিভিন্ন সরকারি ও বেসরকারি অনলাইন ফর্ম ফিল-আপ।"}
];

const posts = [
  {
    title:"প্রধানমন্ত্রী ফসল বীমা যোজনা | মাত্র ₹১ টাকায় ফসলের বীমা",
    image:"assets/hero/slide1.jpg",
    text:`🌾 প্রধানমন্ত্রী ফসল বীমা যোজনা (PMFBY)<br><br>
    মাত্র ₹১ টাকায় কৃষকদের জন্য ফসল বীমার সুযোগ। প্রাকৃতিক দুর্যোগ, পোকামাকড় ও রোগের কারণে ফসলের ক্ষতি হলে আর্থিক সুরক্ষা পাওয়ার সুযোগ রয়েছে।<br><br>
    📅 <b>শেষ তারিখ: ১৫ সেপ্টেম্বর ২০২৬</b><br><br>
    দেরি না করে আজই যোগাযোগ করুন।<br><br>
    <b>RIFFAT DIGITAL POINT</b><br>
    Your Trusted Digital Service<br>
    📍 খোলাবাড়ি, পুলিন্দা, বেলডাঙা, মুর্শিদাবাদ, পশ্চিমবঙ্গ - 742134<br>
    📞 8101449123 / 9907323980<br>
    🕘 সকাল ৯টা - রাত ১০টা`
  }
];

let currentSlide=0, timer=null, progress=null, startedAt=0;
const slidesEl=document.getElementById("heroSlides"), dotsEl=document.getElementById("heroDots");
heroImages.forEach((src,i)=>{
  const d=document.createElement("div"); d.className="slide"+(i===0?" active":"");
  d.innerHTML=`<img src="${src}" alt="RIFFAT DIGITAL POINT banner ${i+1}">`;
  slidesEl.appendChild(d);
  const dot=document.createElement("button"); dot.className="dot"+(i===0?" active":""); dot.onclick=()=>showSlide(i); dotsEl.appendChild(dot);
});
function showSlide(i){currentSlide=(i+heroImages.length)%heroImages.length;document.querySelectorAll(".slide").forEach((x,n)=>x.classList.toggle("active",n===currentSlide));document.querySelectorAll(".dot").forEach((x,n)=>x.classList.toggle("active",n===currentSlide));startAuto();}
function moveSlide(dir){showSlide(currentSlide+dir)}
function startAuto(){clearTimeout(timer); startedAt=Date.now(); timer=setTimeout(()=>moveSlide(1),HERO_SECONDS*1000);}
setInterval(()=>{const pct=Math.min(100,(Date.now()-startedAt)/(HERO_SECONDS*10));document.getElementById("timerBar").style.width=pct+"%";},100);
startAuto();

const sg=document.getElementById("serviceGrid");
services.forEach(s=>{const c=document.createElement("article");c.className="serviceCard";c.onclick=()=>openModal(s.title,s.text,s.image);c.innerHTML=`<img src="${s.image}" alt="${s.title}"><div class="cardBody"><h3>${s.title}</h3><p>${s.text}</p><span class="read">বিস্তারিত দেখুন →</span></div>`;sg.appendChild(c)});

const pg=document.getElementById("postGrid");
posts.forEach(p=>{const c=document.createElement("article");c.className="postCard";c.onclick=()=>openModal(p.title,p.text,p.image);c.innerHTML=`<img src="${p.image}" alt="${p.title}"><div class="cardBody"><h3>${p.title}</h3><p>ছবি ও তথ্যসহ বিস্তারিত জানতে ক্লিক করুন</p><span class="read">পুরো বিস্তারিত →</span></div>`;pg.appendChild(c)});

function openModal(title,text,image){document.getElementById("modalTitle").textContent=title;document.getElementById("modalText").innerHTML=text;document.getElementById("modalImg").src=image;document.getElementById("modal").classList.add("show");document.body.style.overflow="hidden";}
function closeModal(e){if(!e||e.target.id==="modal"){document.getElementById("modal").classList.remove("show");document.body.style.overflow="";}}
function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
document.getElementById("year").textContent=new Date().getFullYear();
