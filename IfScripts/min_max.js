"use strict";

var a = 4;
var b = 8;
var c = 16;
var smallestValue;
var largestValue;


if (a <= b && a <= c) {
    smallestValue = a;
} else if (b <= a && b <= c) {
    smallestValue = b;
} else if (c <= a && c <= b) {
    smallestValue = c;
}

console.log("smallest value = " + smallestValue)

if (a >= b && a >= c) {
    largestValue = a;
} else if (b >= a && b >= c) {
    largestValue = b;
} else if (c >= a && c >= b){
    largestValue = c;
}

console.log("largest value = " + largestValue)

