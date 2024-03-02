let menu=document.querySelector(".ri-menu-3-line")
let clo=document.querySelector(".ri-close-fill")
let nav=document.querySelector(".respnav")

menu.addEventListener("click",function() {
    nav.style.top="0%";
    
})
clo.addEventListener("click",function() {
    nav.style.top="-100%";
    
})


    

     //form js part*****   

    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const password=document.getElementById("password");


    const name_error=document.getElementById("name_error");
    const email_error=document.getElementById("email_error");
    const pass_error=document.getElementById("pass_error");
    
     
    
    //eventListener
    
    form.addEventListener('submit',(e)=>

    {
        var email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if(name.value ==="" || name.value == null)
        {
            e.preventDefault();
            name_error.innerHTML="***Name is required";
        
    }
    if(!email.value.match(email_check))
    {
        e.preventDefault();
        email_error.innerHTML="****valid email is required";
    }
    if(password.value.length<=7 )
    {
        e.preventDefault();
        pass_error.innerHTML="***password must be at least 8 digits";
    }
    
    })
