/*
Binary Search the Word from Word List
Desc -> Read in a list of words from File. Then prompt the user to enter a word to search the 
        list. The program reports if the search word is found in the list.
I/P -> read in the list words comma separated from a File and then enter the word to be 
        searched
Logic -> Use Arrays to sort the word list and then do the binary search
O/P -> Print the result if the word is found or not

Author Name : Aditya Gawde

Date : 15/11/2019

*/






var utility = require('../Utility/Utility')
//let str = "Hey Bye Tata Hello Walla Boss";
let word;
var fs = require('fs');
let searchArray=fs.readFileSync('word.txt').toString().split(" ");
//let searchArray=str.split(' ');
let n=searchArray.length;
utility.bubbleSort(searchArray);
console.log('\nWords to be search : ');
searchArray.forEach(utility.print);
console.log('\n');

word = utility.inputWord();
let res = utility.binarySearch(searchArray, 0, n-1, word);
if(res === -1)
{
    console.log('Word not Found');
}
else
{
    console.log(`Word ${word} found at position ${res}`);
}

