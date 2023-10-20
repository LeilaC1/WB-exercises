"use strict";
console.log("start index.js")

window.onload = init;

function init(){
    console.log("start init.")
const onGreetUserBtnClicked = document.getElementById("onGreetUserBtnClicked0");
onGreetUserBtnClicked.onclick = onGreetUserBtnClicked;
console.log("end .init");
}
function onGreetUserBtnClicked (){
    console.log("btn clicked");
}