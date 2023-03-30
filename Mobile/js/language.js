"use strict";
const languageSelector=document.querySelector('.language_selector');
const btnDesign=document.querySelector('.con');
const a1=document.querySelector('.a1');
const title=document.querySelector('.heading');
const profileSelector=document.querySelector('.profile_selector');
const profileClick=document.querySelector('.profile_container');
const profileDesignF=document.querySelector('.farmer');
const profileDesignC=document.querySelector('.customer');
const getStarted=document.querySelector('.get_started');

const errorMessage=document.querySelector('.error_message');
const errorText=document.querySelector('.error_text');

const register=document.querySelector('.register');
const login=document.querySelector('.login');
let check=0;
let check1=0;
let check2=0;
let check3=0;

let usernum=[];
languageSelector.addEventListener("click",function(e){
    const clicked=e.target.closest(".box");
  let n=clicked.dataset.lan;
    const radio=document.querySelector(`.radio_${clicked.dataset.lan}`);
    radio.click();
    if(n==2){
        errorMessage.classList.add('display');
   btnDesign.style.backgroundColor="#fb641b";
   btnDesign.style.borderColor="#fb641b";
   check++;
    }
    else{
        btnDesign.style.backgroundColor="#c2c2c2";
        btnDesign.style.borderColor="#c2c2c2";
    }

    if(n==1){
        errorMessage.classList.remove('display');
        errorText.textContent="Some languages does not support. We are currently working on it.\n சில மொழிகள் அதை ஆதரிக்கவில்லை. தற்போது அதற்கான பணிகளில் ஈடுபட்டுள்ளோம்.";
        btnDesign.style.backgroundColor="#c2c2c2";
        btnDesign.style.borderColor="#c2c2c2";
        check=0;
    }
    
    if(n==3){
        errorMessage.classList.remove('display');
        errorText.textContent="Some languages does not support. We are currently working on it.\n ചില ഭാഷകൾ അതിനെ പിന്തുണയ്ക്കുന്നില്ല. ഞങ്ങൾ ഇപ്പോൾ അതിനായി പ്രവർത്തിക്കുകയാണ്.";
        btnDesign.style.backgroundColor="#c2c2c2";
        btnDesign.style.borderColor="#c2c2c2";
        check=0;
    }
    if(n==4){
        errorMessage.classList.remove('display');
        errorText.textContent="Some languages does not support. We are currently working on it.\n కొన్ని భాషలు దీనికి మద్దతు ఇవ్వవు. మేము ప్రస్తుతం దానిపై పని చేస్తున్నాము.";
        btnDesign.style.backgroundColor="#c2c2c2";
        btnDesign.style.borderColor="#c2c2c2";
        check=0;
    }
    if(check===0)
    {
        setTimeout(() => {
            errorMessage.classList.add('display');
          }, 3000);
    }
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
    btnDesign.style.backgroundColor="#fb641b";
    btnDesign.style.borderColor="#fb641b";
    check1=n;
    }
    else
    {
        profileDesignF.style.backgroundColor="#c2c2c2";
        profileDesignC.style.backgroundColor="#fb641b";
        btnDesign.style.backgroundColor="#fb641b";
        btnDesign.style.borderColor="#fb641b";
        check1=n;
    }
    check++;
});
btnDesign.addEventListener('click',function(){
    if(check>2){
        btnDesign.classList.add('display');
        profileSelector.classList.add('display'); 
        getStarted.classList.remove('display')
        title.textContent="Register/Log-In";
        // console.log(check1);
        localStorage.setItem("send", check1);
    }
   
});
register.addEventListener('click',function()
{
    check2=1; 
    localStorage.setItem("send1", check2);
});
login.addEventListener('click',function()
{ 
   check2=2;
   localStorage.setItem("send1", check2);
});
