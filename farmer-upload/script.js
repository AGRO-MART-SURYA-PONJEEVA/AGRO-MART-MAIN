"use strict";
//////////////////////////////////////////////////
//image section//
const imageInput = document.querySelector(".file-input");
const button = document.querySelector(".upload_btn");
const imageSrc = document.querySelector(".image-display");
const imageSrc1 = document.querySelector(".image-display1");
const imageSrc2 = document.querySelector(".image-display2");
const imageSrc3 = document.querySelector(".image-display3");
const publish = document.querySelector(".btn_p");
const box = document.querySelectorAll(".box");
const no = document.querySelectorAll(".no");

imageInput.addEventListener("click",function(){
  no.forEach((mov) => {
    mov.style.marginLeft="0px";
    mov.style.color="green";
    mov.textContent="Publish..."
  });
})
publish.addEventListener("click", function () {
  const file1 = imageInput.files[0];
  const file2 = imageInput.files[1];
  const file3 = imageInput.files[2];
  const file4 = imageInput.files[3];
  if (
    file1 !== undefined &&
    file2 !== undefined &&
    file3 !== undefined &&
    file4 !== undefined
  ) {
    const imageUrl1 = URL.createObjectURL(file1);
    const imageUrl2 = URL.createObjectURL(file2);
    const imageUrl3 = URL.createObjectURL(file3);
    const imageUrl4 = URL.createObjectURL(file4);
    imageSrc.src = imageUrl1;
    imageSrc1.src = imageUrl2;
    imageSrc2.src = imageUrl3;
    imageSrc3.src = imageUrl4;
    box.forEach((mov) => {
      console.log(mov);
      mov.style.padding = "0px";
    });
    no.forEach((mov) => {
      mov.textContent=""
    });
  }
  else
  {
    alert("Plz select four Image!...");
  }
});
//////////////////////////////////////////////////
///////////////////////////////////////////////
// let myMediaQuery = window.matchMedia("(min-width: 915px)");
// function widthChangeCallback(myMediaQuery) {
//   if (myMediaQuery.matches) {
//     // window.location.href = "/index.html";
//   } else {

//     window.location.href = "/index2.html";
//   }
// }
// myMediaQuery.addEventListener("change", widthChangeCallback);
// widthChangeCallback(myMediaQuery);
//////////////////////////////////////////////////
//main//
//button//
const button1=document.querySelector(".next_form1");
const button2=document.querySelector(".next_form2");
const button3=document.querySelector(".next_notice");
const backButton1=document.querySelector(".back_form2");
const backButton2=document.querySelector(".back_form3");
//class//
const form1=document.querySelector(".form_1");
const form2=document.querySelector(".form_2");
const form3=document.querySelector(".notice");

const list1=document.querySelector(".one");
const list2=document.querySelector(".two");
const list3=document.querySelector(".three");
button1.addEventListener("click",function(e)
{
  e.preventDefault();
  form1.classList.add("display");
  list2.style.borderBottom="5px solid #27c8a1";
  list1.style.borderBottom="none";
  form2.classList.remove("display");
})
backButton1.addEventListener("click",function()
{
  form1.classList.remove("display");
  list1.style.borderBottom="5px solid #27c8a1";
  list2.style.borderBottom="none";
  form2.classList.add("display");
})
button2.addEventListener("click",function(e){
  e.preventDefault();
  form2.classList.add("display");
  list3.style.borderBottom="5px solid #27c8a1";
  list2.style.borderBottom="none";
  form3.classList.remove("display");
})
backButton2.addEventListener("click",function(e)
{
  e.preventDefault();
  form2.classList.remove("display");
  list2.style.borderBottom="5px solid #27c8a1";
  list3.style.borderBottom="none";
  form3.classList.add("display");
})