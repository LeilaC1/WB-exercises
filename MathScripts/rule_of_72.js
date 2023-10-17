"use strict";

//rule of 72 = t(time) 72/r(rate)
var savingsAccount = 1000;
var rate = 9.2;
var time = 72 / rate;
var savingsGrowth = savingsAccount * 2

console.log("At a " + rate + "% " + "iterest rate, your savings account will be worth " + savingsGrowth + " in " + time + " years" )