/*
Extend the above program to find the prime numbers that are Anagram and Palindrome 

Author Name : Aditya Gawde

Date : 16/11/2019
*/
var utility = require('../Utility/Utility');

let arr = new Array(1000);
for(let i=0 ;i<=1000;i++){
    arr[i]=false;
}

console.log('The Prime number that are Anagram, between range ( 0 - 1000 )\n');


for( i=0; i<=1000; i++ )
{

    if( utility.checkPrime(i))
    {
        for( j=i+1; j<=1000; j++)
        {
            if( utility.checkPrime(j) )
            {
                if( utility.checkAnagramForInteger( i, j ) )
                {
                    //process.stdout.write( j + ' ' );
                    if(!arr[j]){
                        arr[j]=true;
                        process.stdout.write( i+' ' +j + ' ' );
                    }
                }
            }   
        }
    }
}

console.log('\n');

