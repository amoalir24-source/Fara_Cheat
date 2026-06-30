// ثبت نام

const registerBtn=document.getElementById("registerBtn");

if(registerBtn){

registerBtn.onclick=()=>{

const user=document.getElementById("regUser").value.trim();

const pass=document.getElementById("regPass").value;

const pass2=document.getElementById("regPass2").value;

if(user==""||pass==""){

alert("همه فیلدها را پر کنید");

return;

}

if(pass!=pass2){

alert("رمزها یکسان نیستند");

return;

}

localStorage.setItem("faraAccount",

JSON.stringify({

username:user,

password:pass

})

);

alert("ثبت نام انجام شد");

location.href="login.html";

};

}

// ورود

const loginBtn=document.getElementById("loginBtn");

if(loginBtn){

loginBtn.onclick=()=>{

const user=document.getElementById("loginUser").value;

const pass=document.getElementById("loginPass").value;

const remember=document.getElementById("remember").checked;

const account=

JSON.parse(localStorage.getItem("faraAccount"));

if(!account){

alert("ابتدا ثبت نام کنید");

return;

}

if(user!=account.username||

pass!=account.password){

alert("نام کاربری یا رمز اشتباه است");

return;

}

const expire=

Date.now()+86400000;

localStorage.setItem("login",

JSON.stringify({

user:user,

expire:remember?expire:0

})

);

location.href="dashboard.html";

};

}

// چک ورود

const login=

JSON.parse(localStorage.getItem("login"));

if(login){

if(login.expire!=0){

if(Date.now()>login.expire){

localStorage.removeItem("login");

}

}

}