"use strict";
const languageSelector=document.querySelector('.language_selector');
languageSelector.addEventListener("click",function(e){
    const clicked=e.target.closest(".box");

    const radio=document.querySelector(`.radio_${clicked.dataset.lan}`);
    radio.click();
   const btnDesign=document.querySelector('.con');
   btnDesign.style.backgroundColor="#fb641b";
   btnDesign.style.borderColor="#fb641b";
})