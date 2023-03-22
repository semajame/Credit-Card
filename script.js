// LEFT CONTENT

const leftnum = document.getElementById("leftnum");
const leftname = document.getElementById("leftname");
const leftexpmonth = document.getElementById("left-exp-month");
const leftexpyear = document.getElementById("left-exp-year");

// CARDHOLDER NAME

const rightname = document.getElementById("cardholder");
const nameerror = document.getElementById("error-name");

rightname.addEventListener("input", () =>{

    if(rightname.value.length === 0){
        nameerror.style.display = "block"
        rightname.style.outline = "1px solid red";
        confirm.disabled = true;
        
    }  
  
    else {
        nameerror.style.display = null;
        rightname.style.outline = null;
        confirm.disabled = false;
    }

    leftname.value = rightname.value;
})



// CARD NUMBER

const num = document.getElementById("cardnumber");
const error = document.getElementById("error");
const error2 = document.getElementById("error2");

num.addEventListener("input", () =>{

    if(num.value.length === 0){
        error.style.display = "block";
        error2.style.display = "none";
        num.style.outline = "1px solid red";
        confirm.disabled = true;

    } else if(num.value.length < 19){
        error2.style.display = "block";
        error.style.display = null;
        num.style.outline = "1px solid red";
        confirm.disabled = true;

    } else if (num.value.length === 19){
        num.style.outline = null;
        error2.style.display = null;
    }  

    else {
        error.style.display = null;
        num.style.outline = null;
        confirm.disabled = false;
    }

    leftnum.value = num.value;

})

//EXPDATE

const expm = document.getElementById("exp-m");
const expy = document.getElementById("exp-y");
const experror = document.getElementById("exp-error");
const experror2 = document.getElementById("exp-error2");

expm.addEventListener("input", ()=>{

    if(expm.value.length === 0){
        experror.style.display = "block";
        experror2.style.display = "none"
        expm.style.outline = "1px solid red";
        confirm.disabled = true;

    } else if(expm.value.length <= 1){
        confirm.disabled = true;
        experror2.style.display = "block"
        experror.style.display = null;
        expm.style.outline = "1px solid red";
    }  

    else {
        experror.style.display = null;
        experror2.style.display = null;
        expm.style.outline = null;
        expy.style.outline = null;
        confirm.disabled = false;
    }

    leftexpmonth.value = expm.value;


})

expy.addEventListener("input", ()=>{

    if(expy.value.length === 0){
        experror.style.display = "block";
        experror2.style.display = null;
        expy.style.outline = "1px solid red";
        confirm.disabled = true;

    }  else if(expy.value.length <= 1){
        confirm.disabled = true;
        experror2.style.display = "block";
        expy.style.outline = "1px solid red";
        experror.style.display = null;
        
    }  

        else {
        experror.style.display = null;
        experror2.style.display = null;
        expy.style.outline = null;
        expm.style.outline = null;
        confirm.disabled = false;
    }

    leftexpyear.value = expy.value;

})

// CVC

const cvc = document.getElementById("cvc");
const errorcvc2 = document.getElementById("cvc-error2")
const errorcvc = document.getElementById("cvc-error");

cvc.addEventListener("input", ()=>{
    if(cvc.value.length === 0){
        errorcvc.style.display = "block";
        errorcvc2.style.display = null;
        cvc.style.outline = "1px solid red";
        confirm.disabled = true;
    } 

    else if (cvc.value.length <= 2){
        confirm.disabled = true;
        cvc.style.outline = "1px solid red";
        errorcvc2.style.display = "block";
        errorcvc.style.display = null;

    }  

    else {
        errorcvc.style.display = null;
        errorcvc2.style.display = null;
        cvc.style.outline = null;
        confirm.disabled = false;
    }
})

// RIGHT CONTENT

const rightcontent = document.getElementById("right-content");

// CONFIRM

const confirm = document.getElementById("confirm");
const button = document.querySelector(".thankyou");

confirm.onclick = function(){

    button.classList.toggle("active");
    rightcontent.style.display = "none";
}

const contentbutton = document.getElementById("confirm2");

confirm2.onclick = function(){

    const contentbutton = document.querySelector(".right-content");

    contentbutton.style.display = "block";
    button.classList.remove("active");
}


// RELOAD
window.onload = function() {
    
    leftnum.value = '';
    leftname.value = '';
    leftexpmonth.value = '';
    leftexpyear.value = '';
    rightname.value = '';
    num.value = '';
    expm.value = '';
    expy.value = '';
    cvc.value = '';
    confirm.disabled = true;

}


