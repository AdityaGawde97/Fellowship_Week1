/*
Cross Game or Tic-Tac-Toe Game 
Desc -> Write a Program to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the Player 2 is the user. Player 1 take Random Cell that is the Column and Row. 
I/P -> Take User Input for the Cell i.e. Col and Row to Mark the ‘X’
Logic -> The User or the Computer can only take the unoccupied cell. The Game is played till either wins or till draw...
O/P -> Print the Col and the Cell after every step.
Hint -> The Hints is provided in the Logic. Use Functions for the Logic…

Author Name : Aditya Gawde

Date : 14/11/2019
*/





const read = require('readline-sync');

let i,j,r=1,q=0,r1=1;
let size = 3;

//let use = new Array(9);

let board = new Array(size);                                           // Game Board Array
let showIndex = new Array(size);                                       // Index position  Array


TimeToPlay();                                                          // Start the game




function TimeToPlay(){ 

    let move=0, x=0, y=0, draw=0;
    let turn=true;

    index();                                                          // Calling index function 
    initializeBoard();                                                // Calling initializing the game board 
    printBoard();                                                     // Displaying the Game Board

    do {

        if(turn){                                                     // Checking User turn and Computer turn
            try{
                console.log('***** Your Turn *****');
                move = read.question('Enter your Move [ 1 - 9 ] : '); // accepting the user move

                if( move < 1 || move > 9 || isNaN(move)){             // validation the user move
                    turn = true;
                    throw 'Invalid input try again............'
                }
                else if(Occupied(move)){                             // checking for Occupied position 
                    turn = true;
                    throw 'Position Alredy Occupied...........'
                }
                else{
                    move = move-1;                                  
                    x = ( move / size | 0 );                        // calculating the coordinate x 
                    y = move % size;                                // calculating the coordinate y
                    board[x][y] = 'X';                              
                    turn = false;                                   // After for Computer turn
                    draw++;
                    printBoard();                                   // Displaying the Game Board

                    if( checkWin() == true ) {                      // Checking for win
                        console.log('##### Congo you Win #####');
                    } 
                }
            }
            catch(e){
                console.log(e);                                     
            }
        }
        else{
          
            move = ( Math.random() * 9 | 0);                        // Computer random move
            move = move-1;
            x = ( move / size | 0);                                 // calculating the coordinate x 
            y = move % size;                                         // calculating the coordinate y

            if( board[x][y] == ' ' ) {                              // checking Occupied Position
                console.log('***** Computer`s Turn *****');
                board[x][y] = 'O';
                turn = true;                                        // for user turn
                draw++;
                printBoard();

                if( checkWin() == true ) {
                    console.log('%%%%% You Lose %%%%%');
                }
            }
            else{
                turn = false;
            }
        }

            if( draw == 9 ) {
                console.log('^^^^^^ Ha ha ha Its Draw ^^^^^^');
            }
    }while( checkWin() == false && draw != 9 );                     // Until user or Computer wins or draw
}


function initializeBoard(){                                         // initializing game board

    let c=0;
    for( i=0; i<board.length; i++ ){
        board[i] = new Array(size);
        for( j=0; j<size; j++ ){
            board[i][j] = ' '; 
        }
    }

}

function printBoard(){
    console.log('                     --Position--')
    console.log('-------------       -------------')
    for( i=0; i<size; i++ ){
        for( j=0; j<1; j++ ){
            console.log('| '+board[i][j]+' | '+board[i][j+1]+' | '+board[i][j+2]+' |       | ' // displaying game board
            +showIndex[i][j]+' | '+showIndex[i][j+1]+' | '+showIndex[i][j+2]+' |'); // displaying index board
        }
        console.log('-------------       -------------')
    }

}

function index(){                               // initializing index board

    let c=0;
    for( i=0; i<showIndex.length; i++ ){
        showIndex[i] = new Array(size);
        for( j=0; j<size; j++ ){
            showIndex[i][j] = r1++;
        }
    }


}

function rowWise() {                            // checking rows 

    for ( i=0; i<size; i++) { 
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] &&  board[i][0] != ' ') 
            return (true); 
    } 
    return(false); 
} 
    

function columnWise() {                         // checking columns

    for ( i=0; i<size; i++) { 
        if (board[0][i] == board[1][i] &&  board[1][i] == board[2][i] &&   board[0][i] != ' ') 
            return (true); 
    } 
    return(false); 
} 

function diagonalWise() {                       // checking Diagonally
 
    if (board[0][0] == board[1][1] &&   board[1][1] == board[2][2] &&  board[0][0] != ' ') 
        return(true); 
            
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') 
        return(true); 
    
    return(false); 
} 

function checkWin() {                          // deciding who wins

    return(rowWise() || columnWise() || diagonalWise() ); 
}


function Occupied(move){                        // checking for Occupied position for user
    
    move = move-1;
    x = ( move / size | 0);
    y = move % size;
    return ( board[x][y] != ' ')
}

