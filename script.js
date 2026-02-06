let OpenBtn = document.getElementById("openbtn");
let CloseBtn =document.getElementById("closebtn");
let listitem = document.querySelector(".listitem");

OpenBtn.addEventListener("click",() => {

    listitem.style.display = " flex ";
    OpenBtn.style.display = " none";
    CloseBtn.style.display = " block";

});

CloseBtn.addEventListener("click",() =>{
    listitem.style.display =" none ";
    CloseBtn.style.display = " none" ;
    OpenBtn.style.display = " block";
});

let SignInbtn = document.querySelector(".SignInbtn");
let formcontent= document.querySelector(".formcontent");
let Formclosebtn = document.querySelector(".Formclosebtn");

SignInbtn.addEventListener("click",() =>{
    formcontent.style.display =" flex";

});

Formclosebtn.addEventListener("click",() =>{
    formcontent.style.display =" none ";

});


let signinbutton = document.querySelector(".signinbutton");
let signupbutton = document.querySelector(".signupbutton");
let Usernamediv = document.querySelector(".username");



signinbutton.addEventListener("click",() =>{

    Usernamediv.style.display = "none";

});
signupbutton.addEventListener("click",() =>{
    Usernamediv.style.display = "block";
})