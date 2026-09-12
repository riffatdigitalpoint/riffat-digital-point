const defaultServices=[
["🖥️","Online Form Fill-up","বিভিন্ন সরকারি ও অনলাইন ফর্ম ফিল-আপ, আবেদন এবং প্রয়োজনীয় অনলাইন কাজ।"],
["🪪","PVC Card Printing","Aadhaar, Voter, Ration Card সহ বিভিন্ন কার্ডের professional PVC card printing — wholesale ও retail।"],
["💳","Ayushman Bharat Card","Ayushman Bharat Card KYC, download/status check এবং PVC card সংক্রান্ত পরিষেবা।"],
["🍚","Ration Card Services","eKYC, নতুন আবেদন, নাম/ঠিকানা/বয়স সংশোধন, family member add/remove এবং PVC ration card।"],
["🎓","Scholarship & Education","Scholarship-related online work, applications, document upload এবং প্রয়োজনীয় সহায়তা।"],
["🧾","Digital & Cyber Services","Print, scan, photocopy, document upload এবং বিভিন্ন digital/cyber café পরিষেবা।"]
];

let services=JSON.parse(localStorage.getItem("rdp_services")||"null")||defaultServices.map(x=>({icon:x[0],title:x[1],desc:x[2]}));
let posts=JSON.parse(localStorage.getItem("rdp_posts")||"[]");
let gallery=JSON.parse(localStorage.getItem("rdp_gallery")||"[]");

const $=id=>document.getElementById(id);
function save(){localStorage.setItem("rdp_services",JSON.stringify(services));localStorage.setItem("rdp_posts",JSON.stringify(posts));localStorage.setItem("rdp_gallery",JSON.stringify(gallery));}
function render(){
 $("year").textContent=new Date().getFullYear();
 $("serviceGrid").innerHTML=services.map(s=>`<article class="service-card"><div class="service-icon">${s.icon||"◆"}</div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></article>`).join("")||'<div class="empty">কোনও সার্ভিস যোগ করা হয়নি।</div>';
 $("postGrid").innerHTML=posts.length?posts.map(p=>`<article class="post-card"><div class="post-date">${esc(p.date)}</div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></article>`).join(""):'<div class="empty">নতুন নোটিশ বা আপডেট এখানে দেখাবে। Admin Panel থেকে যোগ করুন।</div>';
 $("galleryGrid").innerHTML=gallery.length?gallery.map(g=>`<div class="gallery-item"><img src="${g.data}" alt="${esc(g.name||"Gallery image")}"></div>`).join(""):'<div class="empty">এখনও কোনও ছবি আপলোড করা হয়নি। Admin Panel থেকে ছবি যোগ করুন।</div>';
 renderAdmin();
}
function renderAdmin(){
 $("adminServices").innerHTML='<div class="admin-list">'+services.map((s,i)=>`<div class="admin-row"><span><b>${esc(s.title)}</b><br><small>${esc(s.desc)}</small></span><button class="delete" onclick="delService(${i})">Delete</button></div>`).join("")+'</div>';
 $("adminPosts").innerHTML='<div class="admin-list">'+posts.map((p,i)=>`<div class="admin-row"><span><b>${esc(p.title)}</b><br><small>${esc(p.date)}</small></span><button class="delete" onclick="delPost(${i})">Delete</button></div>`).join("")+'</div>';
 $("adminGallery").innerHTML=gallery.map((g,i)=>`<div class="admin-image"><img src="${g.data}"><span>${esc(g.name)}</span><button class="delete" onclick="delImage(${i})">Delete</button></div>`).join("");
}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function openAdmin(){ $("adminModal").style.display="block"; renderAdmin(); }
function closeAdmin(){ $("adminModal").style.display="none"; }
function toggleMenu(){ $("nav").classList.toggle("show"); }
function showTab(id,btn){document.querySelectorAll(".tab-content").forEach(x=>x.classList.add("hidden"));$(id).classList.remove("hidden");document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active");}
function delService(i){services.splice(i,1);save();render();}
function delPost(i){posts.splice(i,1);save();render();}
function delImage(i){gallery.splice(i,1);save();render();}

$("serviceForm").addEventListener("submit",e=>{e.preventDefault();services.unshift({icon:"📌",title:$("serviceTitle").value.trim(),desc:$("serviceDesc").value.trim()});e.target.reset();save();render();});
$("postForm").addEventListener("submit",e=>{e.preventDefault();posts.unshift({title:$("postTitle").value.trim(),text:$("postText").value.trim(),date:new Date().toLocaleDateString("bn-BD")});e.target.reset();save();render();});
$("imageInput").addEventListener("change",e=>{
 [...e.target.files].forEach(file=>{const r=new FileReader();r.onload=()=>{gallery.unshift({name:file.name,data:r.result});save();render();};r.readAsDataURL(file);});
 e.target.value="";
});
window.addEventListener("click",e=>{if(e.target===$("adminModal"))closeAdmin();});
render();