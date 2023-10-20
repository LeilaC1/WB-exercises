"use strict";

// use switch statements todetermine and print a department name based on department code

// exx
//switch(expression) {
//   case value1:
//   // code block
//   break;
//   case value2:
//   // code block
//   break;
//   default:
//    // code block for none of the above
//   }

let departmentCode = 10;
let departmentName;

switch (departmentCode) {
    case 1:
    departmentName = "Marketing";
    break;
    case 5:
    departmentName = "Human Resources";
    break;
    case 10:
    departmentName = "Accounting";
    break;
    case 12:
    departmentName = "Legal";
    break;
    case 18:
    departmentName = "IT";
    break;
    case 20:
    departmentName = "Customer Relations";
    break;
    default:
    departmentName = "<unknown>";
   }
   
   console.log(departmentName)