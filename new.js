let menu=document.querySelector(".ri-menu-3-line")
let clo=document.querySelector(".ri-close-fill")
let nav=document.querySelector(".respnav")

menu.addEventListener("click",function() {
    nav.style.top="0%";
    
})
clo.addEventListener("click",function() {
    nav.style.top="-100%";
    
})