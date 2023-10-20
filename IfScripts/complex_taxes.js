"use strict";

// calculate federal tax based on the values of annual gross income (num), and a filing status (single or joint)

// (annual, status)


// variables and calculations
let hoursWorked = 45;
let payRate = 17.30;
let weeklyGrossPay = hoursWorked * payRate;
let annualGrossPay = weeklyGrossPay * 52;
let filingStatus = "single" ;
let taxRate;
let fedTax = annualGrossPay * taxRate;
// if statements filing

if (filingStatus == "single") {
    // if taxRate
    if (annualGrossPay < 12000) {
        taxRate = "5%";
    } else if (annualGrossPay <= 24,999.99) {
        taxRate = "10%";
    }
 else if (annualGrossPay <= 74999.99) {
    taxRate = "15%";
    } else if (annualGrossPay >= 75000) {
        taxRate = "20%";
} else if (filingStatus == "joint") {
// if taxRate
if (annualGrossPay < 12000) {
    taxRate = "0%";
} else if (annualGrossPay <= 24999.99) {
    taxRate = "6%";
}
else if (annualGrossPay <= 74999.99) {
taxRate = "11%";
} else if (annualGrossPay >= 75000) {
    taxRate = "20%";
}     
}
}
// output
console.log("fed tax for " + filingStatus + " with a weekly gross pay of " + weeklyGrossPay.toFixed(2) + " is " 
+ /*keeps giving not a number*/ fedTax)

// pt 2 of exercise
let tax = fedTax / 100;
let netpay = tax - annualGrossPay;

console.log("you worked " + hoursWorked + " this year and earned " + payRate.toFixed(2) + " so your gross pay is " + annualGrossPay
+ ", your filing status is " + filingStatus + " so your tax witholdings this year is " + /*got NaN*/ tax  + " your net pay is " + /*got NaN*/netpay   )
