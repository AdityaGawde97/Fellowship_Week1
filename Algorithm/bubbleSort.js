/*
Bubble Sort 
Desc -> Reads in integers prints them in sorted order using Bubble Sort
I/P -> read in the list ints
O/P -> Print the Sorted List 

Author Name : Aditya Gawde

Date : 15/11/2019
*/

var utility = require('../Utility/Utility')

console.log('Sort Array Using Bubble Sort');
let numberOfElement = utility.inputNumberOf();

try
{
    if(!isNaN(numberOfElement))
    {
        let elementArray = utility.inputElementInArray(numberOfElement);
        process.stdout.write('\nUnsorted Array : ');
        elementArray.forEach(utility.print)
        console.log();

        utility.bubbleSort(elementArray);

        process.stdout.write('\nSorted Array : ');
        elementArray.forEach(utility.print);
        console.log('\n');
    }
    else
    {
        throw 'please enter the Input in Interger';
        
    }
}
catch(e)
{
    console.log(e);
}


