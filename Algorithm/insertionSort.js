/*
Insertion Sort 
Desc -> Reads in strings and prints them in sorted order using insertion sort.
I/P -> read in the list words
Logic -> Use Insertion Sort to sort the words in the String array
O/P -> Print the Sorted List

Author Name : Aditya Gawde

Date : 15/11/2019
*/

var utility = require('../Utility/Utility')

console.log('Sort Array Using Insertion Sort');
let numberOfElement = utility.inputNumberOf();

try
{
    if(!isNaN(numberOfElement))
    {
        let elementArray = utility.inputElementInArray(numberOfElement);
        process.stdout.write('\nUnsorted Array : ');
        elementArray.forEach(utility.print)
        console.log();

        utility.insertionSort(elementArray);

        process.stdout.write('\nSorted Array : ');
        elementArray.forEach(utility.print);
        console.log();
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


