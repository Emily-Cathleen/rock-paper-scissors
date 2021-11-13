var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');
var centerChoose = document.querySelector('.center-choose');
var gameChoiceView = document.querySelector('.game-choice-view');
var chooseFighterClassic = document.querySelector('.choose-fighter-classic');
var chooseFighterDifficult = document.querySelector('.choose-fighter-difficult');
var changeGameButton = document.querySelector('.change-game');
// var selectFighter = document.querySelectorAll('.fighter-button');
var rockFighter = document.querySelector('.rock');


//query select for each button - assign that fighter to a human player.
//Assign a random fighter to the comouter player.
//store the choices in the game class. player 1 chosen token. player 2 chosen token.
//method in the game class to evaluate win conditions


// for (var i = 0; i < selectFighter.length; i++) {
//   selectFighter[i].addEventListener("click", startGame);
// }
//
// function getRandomIndex(array) {
//   var randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

//global variables

var game;

function addHidden(element) {
  element.classList.add('hidden');
}

function removeHidden(element) {
  element.classList.remove('hidden');
}

function displayClassicGame() {
  // game = new Game('classic');
  hideMain();
  removeHidden(chooseFighterClassic);
}

function displayDifficultGame() {
  hideMain();
  removeHidden(chooseFighterDifficult);
}

function hideMain() {
  centerChoose.innerText = "Choose your fighter!"
  addHidden(gameChoiceView);
  removeHidden(changeGameButton);
}

function returnToGameChoice() {
  centerChoose.innerText = "Choose your game!"
  removeHidden(gameChoiceView);
  addHidden(changeGameButton);
  addHidden(chooseFighterClassic);
  addHidden(chooseFighterDifficult);
}

function playGame() {
  //assign player1 the chosen rockFighter
  var fighter = event.target.className
  console.log(fighter)
  //figure out how to target just the rock either as a class name or value
  // game.human.chooseFighter('fighter')
  //trigger the random computer fighter
  //evaluate for win conditions
  //displaying the win or draw conditions - update score and banner
  //resetting the game
}

classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
changeGameButton.addEventListener('click', returnToGameChoice);
rockFighter.addEventListener('click', playGame)
