/*
Flip Coin and print percentage of Heads and Tails
I/P -> The number of times to Flip Coin. Ensure it is positive integer.
Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails or heads
O/P -> Percentage of Head vs Tails

Author Name : Aditya Gawde

Date : 12/11/2019
*/

var utility = require('../Utility/Utility')

let toss = 0;



let number = utility.readLine().question('How many times you want to toss : ');           // accepting the input

try{
    if(number>0) 
    {
        utility.tossCoin(number);   
    }
    else
        throw 'Enter the Positive Number'
}
catch(error)
{
    console.log(error);
    
}
                                                       
    
