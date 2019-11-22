/*

User   Input   and   Replace   String   Template   “Hello   <<UserName>>,   How   are   you?”  
I/P    -­>   Take   User   Name   as   Input.   Ensure   UserName   has   min   3   char 
Logic  -­>   Replace   <<UserName>>   with   the   proper   name 
O/P    ­->   Print   the   String   with   User   Name  

Author Name : Aditya Gawde

Date : 12/11/2019
*/

let Template1 = "Hello <<UserName>>, How are you ";

const  read = require('readline-sync');

let name = read.question('Enter the Name : ');

try{
    if(isNaN(name)){
        let Template2 = Template1.replace("<<UserName>>", name);
        console.log(Template2);
    }
    else{
        throw 'Plz enter the string';
    }
}
catch(e){
    console.log(e);
}



