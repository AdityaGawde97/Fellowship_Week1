/*
Gambler
Desc -> Simulates a gambler who start with $stake and place fair $1 bets until he/she goes 
        broke (i.e. has no money) or reach $goal. Keeps track of the number of times he/she 
        wins and the number of bets he/she makes. Run the experiment N times, averages the 
        results, and prints them out.
I/P -> $Stake, $Goal and Number of times
Logic -> Play till the gambler is broke or has won
O/P -> Print Number of Wins and Percentage of Win and Loss.

Author Name : Aditya Gawde

Date : 13/11/2019
*/









const read = require('readline-sync');

let stake = read.questionInt('Enter the stake : ');
let goal = read.questionInt('Enter the goal : ');
let trials = read.questionInt('How many times you want to play : ');

function gamble(stake,goal,trials){

    let bet=0,win=0;

    for(let i=0;i<trials;i++){
        let cash = stake;

        while(cash>0 && cash<goal){            // loop until cash is reach to min 0 or max goal
            bet++;

            if(Math.random>0.5){
                cash+=2;
            }
            else{
                cash--;
            }
            
        }
        // if cash == goal is win
        if(cash==goal){
            win++;
        }
    }

    print(win,trials,bet);      //calling print function ang printing the output
}

function print(win,trials,bet){
    // displaying output
    console.log(`${win} wins of ${trials}`);
    console.log(`Percentage of Game Won : ${(win*100)/trials}`);
    console.log(`Avg of Bet ${(1.0*bet)/trials}`);
}


gamble(stake,goal,trials);