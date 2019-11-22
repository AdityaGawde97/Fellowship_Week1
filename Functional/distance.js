/*

Write a program Distance.java that takes two integer command-line arguments x and y and prints the Euclidean 
distance from the point (x, y) to the origin (0, 0). The formulae to calculate distance = sqrt(x*x + y*y). 
Use Math.power function

Author Name : Aditya Gawde

Date : 13/11/2019

*/

const read = require('readline-sync');

let x = read.questionInt('Enter the x : ');
let y = read.questionInt('Enter the y : ');

let dist1 = Math.pow(x,2);
let dist2 = Math.pow(y,2);

let Ed = Math.sqrt(dist1+dist2);

console.log('Euclidean Distance : '+Ed);