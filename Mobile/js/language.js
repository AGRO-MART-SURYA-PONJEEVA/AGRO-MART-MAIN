"use strict";
const languageSelector=document.querySelector('.language_selector');
const btnDesign=document.querySelector('.con');
const title=document.querySelector('.heading');
const profileSelector=document.querySelector('.profile_selector');
const profileClick=document.querySelector('.profile_container');
const profileDesignF=document.querySelector('.farmer');
const profileDesignC=document.querySelector('.customer');
let check=0;
languageSelector.addEventListener("click",function(e){
    const clicked=e.target.closest(".box");

    const radio=document.querySelector(`.radio_${clicked.dataset.lan}`);
    radio.click();
   const btnDesign=document.querySelector('.con');
   btnDesign.style.backgroundColor="#fb641b";
   btnDesign.style.borderColor="#fb641b";
   check++;
});
btnDesign.addEventListener('click',function(){
    if(check>0){
        languageSelector.classList.add('display');
        profileSelector.classList.remove('display');
        btnDesign.style.backgroundColor="#c2c2c2";
        btnDesign.style.borderColor="#c2c2c2";
        title.textContent="Choose Your Profile";
    }
});
profileClick.addEventListener('click',function(e){
    const clicked=e.target.closest(".pro_box");
    let n=clicked.dataset.pro;
    if(n==1){
    profileDesignF.style.backgroundColor="#fb641b";
    profileDesignC.style.backgroundColor="#c2c2c2";
    btnDesign.style.backgroundColor="#c2c2c2";
    btnDesign.style.borderColor="#c2c2c2";
    }
    else
    {
        profileDesignF.style.backgroundColor="#c2c2c2";
        profileDesignC.style.backgroundColor="#fb641b";
        btnDesign.style.backgroundColor="#c2c2c2";
        btnDesign.style.borderColor="#c2c2c2";
    }
       
});