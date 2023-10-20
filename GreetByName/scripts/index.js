"use strict";
console.log("start index.js");

window.onload = init;

function init(){
    console.log("start init.")


const onGreetUserBtn = document.getElementById("onGreetUserBtn");
onGreetUserBtn.onclick = onGreetUserBtnClicked;
console.log("end .init")
}
function onGreetUserBtnClicked (){
    console.log("btn clicked");
    const nameField = document.getElementById("nameField");
    let nameValue = nameField.value;
    let message = "Hello " + nameValue;
    alert(message);
}