const read = require('readline-sync');

let i,j,r=1,q=0,r1=1;
let size = 3;

let use = new Array(9);

let board = new Array(size);
let showIndex = new Array(size);


TimeToPlay();   // Start the game




function TimeToPlay(){

    let move=0, x=0, y=0, draw=0;
    let turn=true;

    index();
   // printBoard();
    initializeBoard();
    printBoard();

    do {

        if(turn){
            try{
                console.log('***** Your Turn *****');

                move = read.question('Enter your Move [ 1 - 9 ] : ');

                if( move < 1 || move > 9 || isNaN(move)){
                    turn = true;
                    throw 'Invalid input try again............'
                }
                else if(valid(move)){
                    turn = true;
                    throw 'Position Alredy Occupied...........'
                }
                else{
                    move = move-1;
                    x = ( move / size | 0 );
                    y = move % size;
                    board[x][y] = 'X';
                    turn = false;
                    draw++;
                    printBoard();

                    if( checkWin() == true ) {
                        console.log('##### Congo you Win #####');
                    } 
                }
            }
            catch(e){
                console.log(e);
            }
        }
        else{
          
            move = ( Math.random() * 9 | 0);
            move = move-1;
            x = ( move / size | 0);
            y = move % size;

            if( board[x][y] == ' ' ) {        //|| board[x][y] != 'O' ){
                console.log('***** Computer`s Turn *****');
                board[x][y] = 'O';
                turn = true;
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

            if( draw == 9) {
                console.log('^^^^^^ Ha ha ha Its Draw ^^^^^^');
            }
    }while( checkWin() == false && draw != 9 );
}


function initializeBoard(){

    let c=1;
    for( i=0; i<board.length; i++ ){
        board[i] = new Array(size);
        for( j=0; j<size; j++ ){
            board[i][j] = c++; //' '; //`${c++}`;
        }
    }

}

function printBoard(){
    console.log('                     --Position--')
    console.log('-------------       -------------')
    for( i=0; i<size; i++ ){
        for( j=0; j<1; j++ ){
            console.log('| '+board[i][j]+' | '+board[i][j+1]+' | '+board[i][j+2]+' |       | '
            +showIndex[i][j]+' | '+showIndex[i][j+1]+' | '+showIndex[i][j+2]+' |');
        }
        console.log('-------------       -------------')
    }

}

function index(){

    let c=0;
    for( i=0; i<showIndex.length; i++ ){
        showIndex[i] = new Array(size);
        for( j=0; j<size; j++ ){
            showIndex[i][j] = r1++;
        }
    }


}
function rowWise() { 

    for ( i=0; i<size; i++) { 
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] &&  board[i][0] != ' ') 
            return (true); 
    } 
    return(false); 
} 
    

function columnWise() { 

    for ( i=0; i<size; i++) { 
        if (board[0][i] == board[1][i] &&  board[1][i] == board[2][i] &&   board[0][i] != ' ') 
            return (true); 
    } 
    return(false); 
} 

function diagonalWise() { 

    if (board[0][0] == board[1][1] &&   board[1][1] == board[2][2] &&  board[0][0] != ' ') 
        return(true); 
            
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') 
        return(true); 
    
    return(false); 
} 

function checkWin() {

    return(rowWise() || columnWise() || diagonalWise() ); 
}


function valid(move){
    
    move = move-1;
    x = ( move / size | 0);
    y = move % size;
    return ( board[x][y] == 'X');
}

