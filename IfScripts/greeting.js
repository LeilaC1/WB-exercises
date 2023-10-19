"use strict";

// define a variable that contains the current hour (0-23)
// 24 hour system

var morningHour = "Good morning!";
var dayHour = "Good day!";
var eveningHour = "Good evening!";
var hour = 18;

if (hour < 10) {
    hour = morningHour;
}
else if (hour < 17) {
    hour = dayHour;
}
else if (hour > 17) {
    hour = eveningHour;
}
console.log(hour)