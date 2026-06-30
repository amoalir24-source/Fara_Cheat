const loader = document.getElementById("loader");

const percent = document.getElementById("loadingPercent");

const progress = document.getElementById("progressCircle");

let value = 0;

const radius = 60;

const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = circumference;

const loading = setInterval(() => {

value++;

percent.innerHTML = value + "%";

const offset = circumference - (value / 100) * circumference;

progress.style.strokeDashoffset = offset;

if(value >= 100){

clearInterval(loading);

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

},300);

}

},15);