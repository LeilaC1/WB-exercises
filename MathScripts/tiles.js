"use strict";

// room dimension lxw in feet, we have 12 (1by1 in feet) tiles per box
// area of room = l * w
// tiles needed a * 1.10
// boxes - tiles /12 to fixed(2)

var roomLegnth = 20;
var roomWidth = 12; 
var roomArea = roomLegnth * roomWidth;
var tileNumber = roomArea * 1.10;
var tileBoxes = tileNumber / 12 ;

console.log("Because room is " + roomLegnth +" by " + roomWidth + " area will be = " + roomArea + " & the tiles needed will be " + tileNumber + " which is about " + tileBoxes + " boxes" );