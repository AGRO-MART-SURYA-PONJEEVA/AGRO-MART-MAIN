"use strict";
const phoneInputField = document.querySelector(".mobile");
const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["in", "co", "us", "de"],
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  //container_display//
 const page1=document.querySelector('.form_container');
 const page2=document.querySelector('.form_container_2');
 const page3=document.querySelector('.id_display');

  //input select//
  //page 1//
  const fullName=document.querySelector('.fullname');
  const email=document.querySelector('.email');
  const mobile=document.querySelector('.mobile');
  const radio=document.querySelector('.radio');
  const password=document.querySelector('.password');
  const conPassword=document.querySelector('.conpassword');

  // page 2
  const pincode=document.querySelector('.pincode');
  const state=document.querySelector('.state');
  const city=document.querySelector('.city');
  const house=document.querySelector('.house');
  const road=document.querySelector('.road');
  const landmark=document.querySelector('.landmark');

 //button select//

 