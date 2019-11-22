/*
An Anagram Detection Example
Desc -> One string is an anagram of another if the second is simply a rearrangement of the first. For example, 'heart' and 'earth' are anagrams...
I/P -> Take 2 Strings as Input such abcd and dcba and Check for Anagrams
O/P -> The Two Strings are Anagram or not....

Author Name : Aditya Gawde

Date : 16/11/2019
*/

var utility = require('../Utility/Utility');

var string1 = utility.inputString();
var string2 = utility.inputString();

try{
    if(isNaN(string1) && isNaN(string2))
    {
        if(utility.checkAnagram(string1,string2))
        {
            console.log(`The String ${string1} and ${string2} are Anagrams`);
        }
        else
        {
            console.log('The Strings are not Anagrams');
            
        }
    }
    else{
        throw 'Please Enter the Strings';
        
    }
}
catch(e)
{
    console.log(e);
}