// =========================
// Fara Client V3
// script.js
// =========================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



// Navbar Blur

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>40){

nav.style.background="rgba(15,20,35,.85)";

nav.style.backdropFilter="blur(20px)";

nav.style.boxShadow="0 0 25px rgba(0,255,120,.15)";

}else{

nav.style.background="rgba(255,255,255,.05)";

nav.style.boxShadow="none";

}

});



// Reveal Animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".7s";

observer.observe(card);

});



// Mouse Glow

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



// Back To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";

topBtn.style.pointerEvents="auto";

}else{

topBtn.style.opacity="0";

topBtn.style.pointerEvents="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// Styles

const style=document.createElement("style");

style.innerHTML=`

#cursorGlow{

position:fixed;

width:220px;

height:220px;

background:radial-gradient(circle,#00ff8855,transparent 70%);

border-radius:50%;

pointer-events:none;

transform:translate(-50%,-50%);

filter:blur(40px);

z-index:0;

transition:.05s;

}

#topBtn{

position:fixed;

bottom:25px;

left:25px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#21d66b;

color:white;

font-size:24px;

cursor:pointer;

opacity:0;

pointer-events:none;

transition:.3s;

box-shadow:0 0 25px rgba(33,214,107,.4);

z-index:999;

}

#topBtn:hover{

transform:scale(1.12);

}

`;

document.head.appendChild(style);



// Console

console.log("Fara Client V3 Loaded");
