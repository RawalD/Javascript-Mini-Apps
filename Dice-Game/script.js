'use strict';

const playerOneScoreEL = document.querySelector('#score--0')
const playerTwoScoreEL = document.querySelector('#score--1')
const playerOneCurrent = document.querySelector('#current--0')
const playerTwoCurrent = document.querySelector('#current--1')

const diceEL = document.querySelector('.dice')

const newBtn = document.querySelector('.btn--new')
const diceBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('btn--hold')

let currentScore = 0

let playerOneScore = 0
let playerTwoScore = 0

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
playerOneCurrent.textContent = currentScore

}else{
// Switch to next player
currentScore = 0
}

})
