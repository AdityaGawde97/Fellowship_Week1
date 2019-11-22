/*Coupon Numbers
Desc -> Given N distinct Coupon Numbers, how many random numbers do you need to generate 
        distinct coupon number? This program simulates this random process.
I/P -> N Distinct Coupon Number
Logic -> repeatedly choose a random number and check whether it's a new one.
O/P -> total random number needed to have all distinct numbers.
Functions => Write Class Static Functions to generate random number and to process distinct 
            coupons.

Author Name : Aditya Gawde

Date : 13/11/2019
*/



const read = require('readline-sync');
let couponNo = read.questionInt('Enter the Coupon Number : ')

generateCoupon(couponNo);


function generateCoupon(no){

    // creating arr and initializing by false value
    let arr = new Array(no);
    for(let i=0 ;i<arr.length;i++){
        arr[i]=false;
    }
                   
    let dist=0;

    while(dist<no){
        //generating random numbers
        let value=(Math.random()*no | 0);

        //if arr[value] is false the change its value to true and print the dist value dist counter increment 
        if(!arr[value]){
            dist++;
            arr[value]=true;
            console.log(value);
        }
    }
                                        
}             