/*

2D Array

Desc -> A library for reading in 2D arrays of integers, doubles, or booleans from standard input 
        and printing them out to standard output.
I/P -> M rows, N Cols, and M * N inputs for 2D Array. Use Java Scanner Class
Logic -> create 2 dimensional array in memory to read in M rows and N cols 
O/P -> Print function to print 2 Dimensional Array. In Java use PrintWriter with OutputStreamWriter 
       to print the output to the screen.

Author Name : Aditya Gawde

Date : 13/11/2019

*/


const read = require('readline-sync');
let r = read.questionInt('Enter no of rows : ');
let c = read.questionInt('Enter no of cols : ');

var arr = new Array(r);

for (var i = 0; i < r; i++) {
  arr[i] = new Array(c);
  for(let j=0;j<c;j++){
    arr[i][j]=read.questionInt('Enter the element : ');
  }
}

console.log(arr);

arr.forEach(function(item){console.log(item)});