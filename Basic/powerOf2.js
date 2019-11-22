/*
Power   of   2  

Desc   ­>   This   program   takes   a   command­line   argument   N   and   prints   a   table   of   the 
            powers   of   2   that   are   less   than   or   equal   to   2^N. 
 I/P   ­>   The   Power   Value   N.   Only   works   if   0   <=   N   <   31   since   2^31   overflows   an   int 
 Logic   ­>   repeat   until   i   equals   N. 
 O/P   ­>   Print   the   Power of 2 table

Author Name : Aditya Gawde

Date : 12/11/2019
*/

const read = require('readline-sync');

console.log('Print the table of Power of two')

let n = read.question('Enter N : ');                    // accepting the input

function powerCal(n) {

    try {

        if (n >= 0 && n < 31)                                // cheching number validation
        {

            for (let i = 0; i <= n; i++) {
                console.log('2^' + i + ' = ' + Math.pow(2, i));   // calculating and printing the power of two table
            }

        }
        else
            throw 'Number must be between (0, 31)'
    }
    catch (e) {
        console.log(e);
    }
}


powerCal(n);