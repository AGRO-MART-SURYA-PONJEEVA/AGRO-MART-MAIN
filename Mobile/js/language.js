"use strict";
const languageSelector = document.querySelector(".language_selector");
const conBtn = document.querySelector(".con");
const heading = document.querySelector(".heading");
const lanBoxContainer = document.querySelectorAll(".box");
const loginPage=document.querySelector('.login_page');
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
    heading.textContent="Agro Mart";
    heading.style.textAlign="center";
  }
});
