/*
Write a program Quadratic.java to find the roots of the equation a*x*x + b*x + c. Since the equation is x*x, 
hence there are 2 roots. The 2 roots of the equation can be found using a formula (Note: Take a, b and c as 
input values)

delta = b*b - 4*a*c
Root 1 of x = (-b + sqrt(delta))/(2*a)
Root 2 of x = (-b - sqrt(delta))/(2*a)

Author Name : Aditya Gawde

Date : 13/11/2019

*/


const read = require('readline-sync');

let a = read.question('Enter the a : ');
let b = read.question('Enter the b : ');
let c = read.question('Enter the c : ');

console.log(`The equation is ${a}*x*x + ${b}*x + ${c}`);

let delta = b*b-4*a*c;

if(delta>0){
    let root1 = (-b + Math.sqrt(delta)) / (2*a);
    let root2 = (-b - Math.sqrt(delta)) / (2*a);

    console.log(`The Root 1 of X = ${root1}`);
    console.log(`The Root 1 of X = ${root2}`);
}

else{
    console.log('Roots are Complex');
}


