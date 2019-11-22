/**
Harmonic   Number
Desc   ­>   Prints   the   Nth   harmonic   number:   1/1   +   1/2   +   ...   +   1/N 
I/P   ­>   The   Harmonic   Value   N.   Ensure   N   !=   0  
Logic   ­>   compute   1/1   +   1/2   +   1/3   +   ...   +   1/N 
O/P   ­>   Print   the   Nth   Harmonic   Value. 

Author Name : Aditya Gawde

Date : 12/11/2019

 */

var utility=require('../Utility/Utility');

console.log('Nth Harmonic number')

let number = utility.inputInteger();                       // accepting the input


try{
    if( number > 0 )
    {
        var harmonicNumber= utility.harmonicNumberCalculator(number)
        console.log(`${number} th Harmonic number ${harmonicNumber}`);
    }
    else
        throw 'Please Enter Positive Number'
}
catch(e)
{
    console.log(e);
}


