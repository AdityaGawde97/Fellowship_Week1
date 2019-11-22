/**
 * Write a program WindChill.java that takes two double command-line arguments t and v and prints the wind chill. 
 * Use Math.pow(a, b) to compute ab. Given the temperature t (in Fahrenheit) and the wind speed v (in miles per 
 * hour), the National Weather Service defines the effective temperature (the wind chill) to be:

Note: the formula is not valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 
        3 (you may assume that the values you get are in that range).


Author Name : Aditya Gawde

Date : 13/11/2019
 */



const read = require('readline-sync');

var utility = require('../Utility/Utility');

let t = read.questionInt('Enter the Temperature in F : ');
let v = read.questionInt('Enter the Wind Speed in mph : ');

utility.CalculateWindChill(t,v);

