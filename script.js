"use strict";
const computer=document.querySelector('.display1');
const mobile=document.querySelector('.display2');
let myMediaQuery = window.matchMedia('(min-width: 915px)');
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    mobile.classList.add("display");
    computer.classList.remove("display");
    setTimeout(() => {
      // window.location.href = "/computer/html/startPageC.html";
    }, 100);
   } else {
    mobile.classList.remove("display");
    computer.classList.add("display");
    setTimeout(() => {
      // window.location.href = "/Mobile/html/startPageM.html";
    }, 10000);
   }
}
myMediaQuery.addEventListener('change', widthChangeCallback);
widthChangeCallback(myMediaQuery);
const imgSlide=document.querySelector('.img_slide');
let i=1;
const tick=function()
{
  if(i!=5){
 imgSlide.src=`/image/${i++}.webp`;
  }
  else
  {
    i=1;
  }
}
setInterval(tick, 3000);
