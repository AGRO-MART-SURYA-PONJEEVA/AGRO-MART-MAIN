"use strict";
const computer=document.querySelector('.display1');
const mobile=document.querySelector('.display2');
let myMediaQuery = window.matchMedia('(min-width: 915px)');
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    mobile.classList.add("display");
    computer.classList.remove("display");
       
   } else {
    mobile.classList.remove("display");
    computer.classList.add("display");
   }
}
myMediaQuery.addEventListener('change', widthChangeCallback);
widthChangeCallback(myMediaQuery);