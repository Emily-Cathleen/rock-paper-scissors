var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');
var centerChoose = document.querySelector('.center-choose');
var gameChoiceView = document.querySelector('.game-choice-view');
var chooseFighterClassic = document.querySelector('.choose-fighter-classic');
var chooseFighterDifficult = document.querySelector('.choose-fighter-difficult');
var changeGameButton = document.querySelector('.change-game');
// var selectFighter = document.querySelectorAll('.fighter-button');
var rockFighter = document.querySelector('.rock');
var paperFighter = document.querySelector('.paper');
var scissorFighter = document.querySelector('.scissor');
var mushroomFighter = document.querySelector('.mushroom');
var bigfootFighter = document.querySelector('.bigfoot');


//query select for each button - assign that fighter to a human player.
//Assign a random fighter to the comouter player.
//store the choices in the game class. player 1 chosen token. player 2 chosen token.
//method in the game class to evaluate win conditions


// for (var i = 0; i < selectFighter.length; i++) {
//   selectFighter[i].addEventListener("click", startGame);
// }
//
//

//global variables

var game;

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function addHidden(element) {
  element.classList.add('hidden');
};

function removeHidden(element) {
  element.classList.remove('hidden');
};

function displayClassicGame() {
  hideMain();
  removeHidden(chooseFighterClassic);
};

function displayDifficultGame() {
  hideMain();
  removeHidden(chooseFighterDifficult);
};

function hideMain() {
  centerChoose.innerText = "Choose your fighter!"
  addHidden(gameChoiceView);
  removeHidden(changeGameButton);
};

function returnToGameChoice() {
  centerChoose.innerText = "Choose your game!"
  removeHidden(gameChoiceView);
  addHidden(changeGameButton);
  addHidden(chooseFighterClassic);
  addHidden(chooseFighterDifficult);
};

function playGame() {
  human = new Player('human');
  computer = new Player('computer');
  game = new Game(human, computer, 'classic');
  var fighter = event.target.className;
  human.chooseFighter(fighter);
  computer.chooseFighter(getRandomIndex(game.classicFighters));
  game.evaluateClassicWinConditions();
  console.log(fighter)
  console.log(human)
  //figure out how to target just the rock either as a class name or value
  // game.human.chooseFighter('fighter')
  //trigger the random computer fighter
  //evaluate for win conditions
  //displaying the win or draw conditions - update score and banner
  //resetting the game
};








classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
changeGameButton.addEventListener('click', returnToGameChoice);
rockFighter.addEventListener('click', playGame)
paperFighter.addEventListener('click', playGame)
scissorFighter.addEventListener('click', playGame)
mushroomFighter.addEventListener('click', playGame)
bigfootFighter.addEventListener('click', playGame)

//refactor:
//Id for event.targrt.id to select for fighter icon
//-use id's to query select for HTML elements. classes should be used for class ClassName
