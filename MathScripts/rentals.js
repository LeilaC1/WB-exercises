"use strict";

// e.van = 15 and cost 250/day 

var peopleGoing = 30;
var vans = peopleGoing / 15;
var vanCostPerPerson = 250 / peopleGoing;
var totalCostOfVan = 250 * vans;

console.log("It will cost " + totalCostOfVan + " to rent the " + vans + " vans and will cost " + vanCostPerPerson.toFixed(2) + " per person")
