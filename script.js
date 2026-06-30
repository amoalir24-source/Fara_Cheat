const btn = document.getElementById("downloadLauncher");

if(btn){

btn.addEventListener("click",()=>{

const user = JSON.parse(localStorage.getItem("faraUser"));

if(!user){

window.location.href="login.html";

return;

}

window.location.href="downloads/FaraClient.zip";

});

}
