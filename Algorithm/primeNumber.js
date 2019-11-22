/*
Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 

Author Name : Aditya Gawde

Date : 16/11/2019
*/

var utility = require('../Utility/Utility');

console.log('The Prime number between range ( 0 - 1000 )\n');


for( i=0; i<=1000; i++ )
{
        if( utility.checkPrime(i) )
        {
            process.stdout.write( i + ' ' );
        }
}

console.log('\n');
