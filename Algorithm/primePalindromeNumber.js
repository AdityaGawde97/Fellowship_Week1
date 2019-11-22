/*
Extend the above program to find the prime numbers that are Anagram and Palindrome 

Author Name : Aditya Gawde

Date : 16/11/2019
*/
var utility = require('../Utility/Utility');

console.log('The Prime number that are Palindrom, between range ( 0 - 1000 )\n');


for( i=0; i<=1000; i++ )
{
        if( utility.checkPrime(i) )
        {
            if( utility.checkPalindrom( i, utility.reverseInteger(i) ) )
            {
                process.stdout.write( i + ' ' );
            }   
        }
}

console.log('\n');



