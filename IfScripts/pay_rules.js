"use strict";

// calculate gross pay given the variables payRate and hoursWorked
// If person works for 40h+ pay the overtime hours at 1.5 times the rate of reg hours

let hoursWorked = 45;
let payRate = 17.30;
let regularHours = hoursWorked * payRate;
let overtimeHours = regularHours * 1.5;
let grossPay = regularHours;

if (hoursWorked < 40 ){
grossPay = grossPay * overtimeHours;
}
else{
    grossPay = regularHours
}
console.log(grossPay.toFixed(2))