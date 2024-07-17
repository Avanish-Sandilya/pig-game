'use strict';
// DOM element variables
let player1total=document.querySelector('#score--0');
let player1Current=document.querySelector('#current--0');
let player2total=document.querySelector('#score--1');
let player2Current=document.querySelector('#current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let rollDie=document.querySelector('.btn--roll');
let hold=document.querySelector('.btn--hold');
let newGame=document.querySelector('.btn--new');
let dice=document.querySelector('.dice');
let temp=0;


// Initialize scores
player1total.textContent=0;
player2total.textContent=0;


// Roll dice event listener
rollDie.addEventListener('click',function(){
    let roll=Math.floor(Math.random()*6)+1;
    let activePlayer=player1.classList.contains('player--active')?0:1;
    let inActivePlayer=player1.classList.contains('player--active')?1:0;
    if(roll===1){
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${inActivePlayer}`).classList.add('player--active');
        dice.src = `dice-${roll}.png`;
        temp=0;
    }else{
        temp+=roll;
        document.querySelector(`#current--${activePlayer}`).textContent =temp;
        dice.src = `dice-${roll}.png`;
    }
})


// Hold button event listener
hold.addEventListener('click',function(){

    let activePlayer = player1.classList.contains('player--active') ? 0 : 1;
    let inActivePlayer = player1.classList.contains('player--active') ? 1 : 0;

    if (activePlayer === 0) {
        player1total.textContent = parseInt(player1total.textContent) + temp;
    } else {
        player2total.textContent = parseInt(player2total.textContent) + temp;
    }

    // Check if any player has won

    if(parseInt(player1total.textContent)>=100){
        player1total.textContent ='You win';
    }else if(parseInt(player2total.textContent)>=100){
        player2total.textContent ='You win';
    }else{

    // Switch active player and reset current score
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector(`.player--${inActivePlayer}`).classList.add('player--active');
    temp = 0;
    }

})

// New game button event listener
newGame.addEventListener('click',function(){
    location.reload();
})





