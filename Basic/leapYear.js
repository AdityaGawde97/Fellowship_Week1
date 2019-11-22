/**
Leap   Year                      
 I/P   ­>   Year,   ensure   it   is   a   4   digit   number. 
 Logic   ­>   Determine   if   it   is   a   Leap   Year. 
 O/P   ­>   Print   the   year   is   a   Leap   Year   or   not. 

Author Name : Aditya Gawde

Date : 12/11/2019
*/
var Utility=require('../Utility/Utility');

console.log('Check year is Leap or Not !');
let year = Utility.inputInteger();                 // accepting the input
Utility.checkYear(year);                        // checking Year leap or not calling checkYear function