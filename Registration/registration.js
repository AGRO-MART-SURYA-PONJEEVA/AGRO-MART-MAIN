"use strict";
const phoneInputField = document.querySelector(".mobile");
const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ["in", "co", "us", "de"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

//container_display//
const page1 = document.querySelector(".form_container");
const page2 = document.querySelector(".form_container_2");
const page3 = document.querySelector(".id_display");

//input select//
//page 1//
const fullName = document.querySelector(".fullname");
const email = document.querySelector(".email");
const mobile = document.querySelector(".mobile");
const radio = document.querySelector(".radio");
const password = document.querySelector(".password");
const conPassword = document.querySelector(".conpassword");
const ratio1=document.querySelector('.farmer');
const ratio2=document.querySelector('.customer');
// page 2
const pincode = document.querySelector(".pincode");
const state = document.querySelector(".state");
const city = document.querySelector(".city");
const house = document.querySelector(".house");
const road = document.querySelector(".road");
const landmark = document.querySelector(".landmark");

//button select//
const nextPage1 = document.querySelector(".next_page");
const nextPage2 = document.querySelector(".next_page_2");
//error message
const errorMessage1 = document.querySelector(".error_message_name");
const errorMessage2 = document.querySelector(".error_message_email");
const errorMessage3 = document.querySelector(".error_message_mobile");
const errorMessage4 = document.querySelector(".error_message_radio");
const errorMessage5 = document.querySelector(".error_message_password");
const errorMessage6 = document.querySelector(".error_message_conpassword");

// global Input
let userDataArray=[];
let role="";
let b=0;
//addEventListener
// page1
nextPage1.addEventListener("click", function (e) {
  const fullNameget = fullName.value;
  const emailget = email.value;
  const mobileget = mobile.value;
  const passwordget = password.value;
  const conpasswordget = conPassword.value;
  let a = 0;
 
  userDataArray=[];
  if (fullNameget != "" || emailget != "" || mobileget != "") {
    if(fullNameget.length>0)
    {
      a++;
      errorMessage1.classList.add("display");
    }
    else{
      a--
    }
    if (emailget.includes("@") && emailget.includes(".com")) {
      a++;
      errorMessage2.classList.add("display");
    } else {
      errorMessage2.textContent = "Please enter a valid email address.";
      errorMessage2.classList.remove("display");
      a--;
    }
    if (mobileget.length !== 10) {
      errorMessage3.textContent = "Please enter a valid 10-digit phone number.";
      errorMessage3.classList.remove("display");
      a--;
    } else {
      a++;
      errorMessage3.classList.add("display");
    }
    if (
      passwordget.length === 4 &&
      conpasswordget.length === 4 &&
      passwordget === conpasswordget
    ) {
      errorMessage5.classList.add("display");
      errorMessage6.classList.add("display");
      a++;
    } else {
      errorMessage5.textContent = "Passwords do not match. Please try again.";
      errorMessage6.textContent = "Passwords do not match. Please try again.";
      errorMessage5.classList.remove("display");
      errorMessage6.classList.remove("display");
      a--;
    }
    

  } else {
    errorMessage1.classList.remove("display");
    errorMessage2.classList.remove("display");
    errorMessage3.classList.remove("display");
    errorMessage3.classList.remove("display");
    errorMessage5.classList.remove("display");
    errorMessage6.classList.remove("display");
    a==0;
  }
 if(a===4)
 {
   userDataArray.push(fullNameget);
   userDataArray.push(emailget);
   userDataArray.push(mobileget);
   userDataArray.push(passwordget);
   userData(userDataArray);
 }
});
ratio1.addEventListener('click',function()
 {
  role="farmer";
 })
 ratio2.addEventListener('click',function()
 {
  role="customer";
 })

//page_2//
nextPage2.addEventListener("click",function(e){
let stateget=state.value="Tamil Nadu";
// stateget="Tamil Nadu"
})


const userData = function (arr) {
  arr.push(role);
  console.log(arr);
  
};
