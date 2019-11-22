/*

Simulate Stopwatch Program
Desc -> Write a Stopwatch Program for measuring the time that elapses between the start and end clicks
I/P -> Start the Stopwatch and End the Stopwatch
Logic -> Measure the elapsed time between start and end
O/P -> Print the elapsed time.

Author Name : Aditya Gawde

Date : 13/11/2019

*/

const read = require('readline-sync');

console.log('Stopwatch Start');

let start = new Date().getTime()/1000;

let stop = read.question('Enter any key to Stop : ');

stop = new Date().getTime()/1000;

console.log(`Elapsed time is = ${parseInt(stop-start)} sec`);