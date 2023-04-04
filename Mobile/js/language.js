"use strict";
const languageSelector = document.querySelector(".language_selector");
languageSelector.addEventListener("click", function (e) {
  const clicked = e.target.closest(".box");
  let n = clicked.dataset.lan;
  const radio = document.querySelector(`.radio_${clicked.dataset.lan}`);
  radio.click();
});
