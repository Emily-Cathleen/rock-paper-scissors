var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');
var centerChoose = document.querySelector('.center-choose');
var gameChoiceView = document.querySelector('.game-choice-view');
var chooseFighterClassic = document.querySelector('.choose-fighter-classic');
var chooseFighterDifficult = document.querySelector('.choose-fighter-difficult');
var changeGameButton = document.querySelector('.change-game');
// var selectFighter = document.querySelectorAll('.fighter-button');
var rockFighter = document.querySelector('#rock');
var paperFighter = document.querySelector('[data-type="paper"]');
var scissorFighter = document.querySelector('[data-type="scissor"]');
var mushroomFighter = document.querySelector('[data-type="mushroom"]');
var bigfootFighter = document.querySelector('[data-type="bigfoot"]');
var resultsView = document.querySelector('.results-view');
var humanFighter = document.querySelector('#humanFighter');
var computerFighter = document.querySelector('#computerFighter');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');


//query select for each button - assign that fighter to a human player.
//Assign a random fighter to the comouter player.
//store the choices in the game class. player 1 chosen token. player 2 chosen token.
//method in the game class to evaluate win conditions


// for (var i = 0; i < selectFighter.length; i++) {
//   selectFighter[i].addEventListener("click", startGame);
// }

//global variables
var game = new Game();

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
  game.selectGameType("difficult");
  hideMain();
  addHidden(chooseFighterClassic);
  removeHidden(chooseFighterDifficult);
};

function hideMain() {
  centerChoose.innerText = "Choose your fighter!"
  addHidden(gameChoiceView);
  removeHidden(changeGameButton);
};

function returnToGameChoice() {
  centerChoose.innerText = "Choose your game!"
  addHidden(changeGameButton);
  addHidden(chooseFighterClassic);
  addHidden(chooseFighterDifficult);
  addHidden(resultsView);
  removeHidden(gameChoiceView);
};

function playGame(event) {
  var fighter = event.target.id || event.target.parentNode.id;
  chooseBothFighters(fighter);
  game.evaluateWinConditions();
  displayResults();
  setTimeout(resetGame, 2000);
};

function chooseBothFighters(fighter) {
  game.human.chooseFighter(fighter);
  game.computer.chooseFighter();
};

function displayResults() {
  centerChoose.innerText = game.message;
  addHidden(chooseFighterClassic);
  addHidden(chooseFighterDifficult);
  removeHidden(resultsView);
  selectedFighter();
  updateScore();
};

function updateScore() {
  humanWins.innerText = game.human.retrieveWinsFromStorage() || 0;
  computerWins.innerText = game.computer.retrieveWinsFromStorage()  || 0;
};

function selectedFighter() {
  humanFighter.src = `./assets/${game.human.fighterChoice}.png`
  computerFighter.src = `./assets/${game.computer.fighterChoice}.png`
};

function resetGame() {
  centerChoose.innerText = "Choose your fighter!"
  addHidden(resultsView);
  if (game.gameType === "difficult") {
    addHidden(chooseFighterClassic);
    displayDifficultGame();
  } else {
    displayClassicGame();
  // if (game.gameType === 'classic') {
  //   displayClassicGame();
  // } else if (game.gameType === 'difficult') {
  //   displayDifficultGame();
  // }
};
};


classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
changeGameButton.addEventListener('click', returnToGameChoice);
rockFighter.addEventListener('click', function(event){
  playGame(event)});
paperFighter.addEventListener('click', playGame);
scissorFighter.addEventListener('click', playGame);
mushroomFighter.addEventListener('click', playGame);
bigfootFighter.addEventListener('click', playGame);
// window.addEventListener('load', displayResults());

//refactor:
//Id for event.targrt.id to select for fighter icon
//-use id's to query select for HTML elements. classes should be used for class ClassName
