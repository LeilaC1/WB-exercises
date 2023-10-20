"use strict";

//defines 2 variables for a student - studentName and studentMajor(CSCI)
// given vars
let studentName = "john";
let studentMajorCode = "BIOL";
let departmentLocation;
let major;

/* needs location and name*/

if (studentName === "Betty" && studentMajorCode === "CSCI") {
     major = "Computer Science";
     departmentLocation = "Sheppard Hall, Room 314";
} else if (studentMajorCode == "ENG") {
    major = "English";
     departmentLocation = "Kerr Hall, Room 201";
} else if (studentMajorCode == "HIST") {
    major = "History";
     departmentLocation = "Kerr Hall, Room 114";
} else if (studentMajorCode == "MKT") {
    major = "Marketing";
     departmentLocation = "Westly Hall, Room 310";
} else if (studentMajorCode == "BIOL") {
    major = "Biology";
     departmentLocation = "Science Bldg, Room 310";
} else {
    major = "unknown";
    departmentLocation= "unknown"
}

console.log(`Student Name: ${studentName}`);
console.log(`Major: ${major}`);
console.log(`Location: ${departmentLocation}`);