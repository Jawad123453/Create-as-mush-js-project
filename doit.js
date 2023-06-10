let MNumber=document.querySelector("[name='elements']");
let MText=document.querySelector("[name='texts']");
let Mselect=document.querySelector("[name='type']");
let results=document.querySelector(".results");

let form=document.forms;

form[0].onsubmit = function  (e){
  e.preventDefault();
  document.querySelectorAll(".box").forEach(function(e) {
  e.remove()});
  
  for(let i=0;i<MNumber.value;i++){
    let myN=document.createElement(Mselect.value);
    let myT=document.createTextNode(MText.value);
    myN.classList="box";
    myN.title="Element";
    myN.id=`id-${i+1}`;
    myN.appendChild(myT);
    results.appendChild(myN);
  }
}








// let numberinput=document.querySelector("[name='elements']");
// let textinput=document.querySelector("[name='texts']");
// let typeinput=document.querySelector("[name='type']");
// let createinput=document.querySelector("[name='create']");
// let results=document.querySelector(".results");

// let forms=document.forms;

// forms[0].addEventListener("submit",function(e){
//   e.preventDefault();
//   results.innerHTML="";

//   for(let i=0;i<numberinput.value;i++){
//     let isk=document.createElement(typeinput.value);
//     isk.classList.add("box");
//     isk.innerText=textinput.value;
//     results.appendChild(isk);
//   }
// })