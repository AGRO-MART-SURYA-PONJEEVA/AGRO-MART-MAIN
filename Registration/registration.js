"use strict";
const phoneInputField = document.querySelector(".mobile");
const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["in", "co", "us", "de"],
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  const nextPage=document.querySelector('.next_page');
  const nextPage2=document.querySelector('.next_page_2');
  const formContaine=document.querySelector('.form_container');
  const formContaine2=document.querySelector('.form_container_2');
  const formContaine3=document.querySelector('.id_display');
  nextPage.addEventListener('click',function(e)
  {
    formContaine.classList.add("display");
    formContaine2.classList.remove("display");
  })
  nextPage2.addEventListener('click',function(e)
  {
    formContaine2.classList.add("display");
    formContaine3.classList.remove("display");
  })

  //registration detail get