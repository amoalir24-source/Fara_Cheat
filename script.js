// ==============================
// Fara Client - script.js
// ==============================

// تغییر ظاهر هدر هنگام اسکرول
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        nav.style.background = "rgba(10,10,15,.90)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        nav.style.background = "rgba(255,255,255,.06)";
        nav.style.boxShadow = "none";
    }
});

// انیمیشن ظاهر شدن بخش‌ها
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// افکت کلیک روی دکمه‌ها
document.querySelectorAll(".main-btn,.download-btn").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{
        btn.style.transform="scale(.96)";
    });

    btn.addEventListener("mouseup",()=>{
        btn.style.transform="";
    });

    btn.addEventListener("mouseleave",()=>{
        btn.style.transform="";
    });

});

// نمایش سال جاری در فوتر (اگر بخواهی بعداً از span استفاده کنی)
const yearSpan = document.getElementById("year");
if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}