"use strict";
//API SECTION//

const firebaseConfig = {
  apiKey: "AIzaSyCEt3onEnuy00kKgoErbbVZKKajGzR2nTw",
  authDomain: "agro-mart-2f9dd.firebaseapp.com",
  databaseURL: "https://agro-mart-2f9dd-default-rtdb.firebaseio.com",
  projectId: "agro-mart-2f9dd",
  storageBucket: "agro-mart-2f9dd.appspot.com",
  messagingSenderId: "986382838818",
  appId: "1:986382838818:web:dff4d0cb805b5cc39cae7b",
};
firebase.initializeApp(firebaseConfig);
var formdb = firebase.database().ref("USER DATABASE");

let alreadyUser = [];
formdb.on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    const user = {
      permantedId: element.val().PermanentedId,
    };
    // console.log(name);
    alreadyUser.push(user);
  });
});
console.log(alreadyUser);
//API SECTION//

const languageSelector = document.querySelector(".language_selector");
const conBtn = document.querySelector(".con");
const heading = document.querySelector(".heading");
const lanBoxContainer = document.querySelectorAll(".box");
const loginPage = document.querySelector(".login_page");
const id=document.querySelector('.input');
const errorMessage=document.querySelector('.error_message');
let a = 0;
languageSelector.addEventListener("click", function (e) {
  a++;
  const clicked = e.target.closest(".box");
  let n = clicked.dataset.lan;
  const radio = document.querySelector(`.radio_${clicked.dataset.lan}`);
  radio.click();
  lanBoxContainer.forEach((box) => {
    box.style.borderColor = "";
    box.style.backgroundColor = "";
  });
  clicked.style.borderColor = "#2162ca";
  clicked.style.backgroundColor = "#e8f1ff";
  conBtn.style.backgroundColor = "#fb641b";
});
conBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (a > 0) {
    languageSelector.classList.add("display");
    loginPage.classList.remove("display");
    heading.textContent = "Agro Mart";
    heading.style.textAlign = "center";
      let idget=id.value;
      if(idget!=="")
      {
        let a=0;
          idget=idget.toLowerCase();
          alreadyUser.forEach((element)=>{
           
           let lid=element.permantedId.toLowerCase();
          
            if(idget===lid)
            {
               a=1;
            }
          })
          if(a===0)
          {
            errorMessage.textContent="Check your ID (or) Create New";
            errorMessage.classList.remove("display");
          }
          else{
            errorMessage.classList.add("display");
           id.value="";
            window.location.href="/Mobile/html/home_page.html";
          }
      } 
      else{
            errorMessage.textContent="Plz enter the filed";
            errorMessage.classList.remove("display");
      }  
  }
});
