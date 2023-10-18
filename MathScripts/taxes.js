"use strict";

// tax = 23%

var monthlyPay = 800;
var monthlyTax = 23;
var taxMoneyWitheld = (monthlyPay * monthlyTax) / 100;

console.log("Money witheld for tax is " + taxMoneyWitheld.toFixed(2));