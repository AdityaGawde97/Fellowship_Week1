/*
Desc -> A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
I/P -> N number of integer, and N integer input array
Logic -> Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0
O/P -> One Output is number of distinct triplets as well as the second output is to print the distinct triplets.

Author Name : Aditya Gawde

Date : 13/11/2019
*/


var utility = require('../Utility/Utility');

const read = require('readline-sync');
let size = read.questionInt('Enter array size : ');

let arr = new Array(size);

for(let i=0;i<size;i++){
    arr[i] = parseInt(read.question('Enter the Element : '));
}


utility.addToZero(arr);

