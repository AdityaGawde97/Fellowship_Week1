/*    
Factors
                  
Desc   ­>   Computes   the   prime   factorization   of   N   using   brute   force. 
I/P   ­>   Number   to   find   the   prime   factors 
Logic   ­>   Traverse   till   i*i   <=   N   instead   of   i   <=   N   for   efficiency  .  
O/P   ­>   Print   the   prime   factors   of   number   N

Author Name : Aditya Gawde

Date : 12/11/2019

*/


const read = require('readline-sync');
let n = read.question('Enter prime No : ');

try{
    if(n>0)
    {

        for(let i=2;i*i<=n;i++){

            while(n%i==0){
                console.log(i);
                n=n/i;
            }
        }

        if(n>2){
        console.log(n);
        }
    }
    else
        throw 'Enter the no greater than 0'
}
catch(e){
    console.log(e);
}




            