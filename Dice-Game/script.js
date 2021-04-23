'use strict';

const playerOneEL = document.querySelector('.player--0') 
const playerTwoEL = document.querySelector('.player--1') 

const playerOneScoreEL = document.querySelector('#score--0')
const playerTwoScoreEL = document.querySelector('#score--1')
const playerOneCurrent = document.querySelector('#current--0')
const playerTwoCurrent = document.querySelector('#current--1')

const diceEL = document.querySelector('.dice')

const newBtn = document.querySelector('.btn--new')
const diceBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('btn--hold')

const scores = [0,0]
let currentScore = 0
let activePlayer = 0



//Defaults
playerOneScoreEL.textContent = 0
playerTwoScoreEL.textContent = 0
diceEL.classList.add('hidden')

//Roll dice
diceBtn.addEventListener('click', ()=> {
    //Random number
const dice = Math.trunc(Math.random() * 6) + 1

    //Display dice
diceEL.classList.remove('hidden')
diceEL.src = `dice-${dice}.png`

    //Check for dice == 1
if(dice !== 1){
// Add dice to current score
currentScore += dice
document.getElementById(`current--${activePlayer}`).textContent = currentScore



}else{
// Switch to next player
document.getElementById(`current--${activePlayer}`).textContent = 0

activePlayer = activePlayer === 0 ? 1 : 0 
currentScore = 0

playerOneEL.classList.toggle('player--active')
playerTwoEL.classList.toggle('player--active')

}

})
