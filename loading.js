const loader = document.getElementById("loader");

const progress = document.getElementById("progress");

const percent = document.getElementById("percent");

if(loader){

let value = 0;

const radius = 70;

const circle = 2 * Math.PI * radius;

progress.style.strokeDasharray = circle;
progress.style.strokeDashoffset = circle;

const loading = setInterval(() => {

value++;

percent.innerHTML = value + "%";

const offset = circle - (value / 100) * circle;

progress.style.strokeDashoffset = offset;

if(value >= 100){

clearInterval(loading);

loader.style.opacity = "0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

},15);

}
