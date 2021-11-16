var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');
var centerChoose = document.querySelector('.center-choose');
var gameChoiceView = document.querySelector('.game-choice-view');
var chooseFighterClassic = document.querySelector('.choose-fighter-classic');
var chooseFighterDifficult = document.querySelector('.choose-fighter-difficult');
var changeGameButton = document.querySelector('.change-game');
var rockFighter = document.querySelector('#rock');
var paperFighter = document.querySelector('#paper');
var scissorFighter = document.querySelector('#scissor');
var mushroomFighter = document.querySelector('#mushroom');
var bigfootFighter = document.querySelector('#bigfoot');
var resultsView = document.querySelector('.results-view');
var humanFighter = document.querySelector('#humanFighter');
var computerFighter = document.querySelector('#computerFighter');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
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
  game.selectGameType(undefined);
  hideMain();
  removeHidden(chooseFighterClassic);
  addHidden(mushroomFighter);
  addHidden(bigfootFighter);
};

function displayDifficultGame() {
  game.selectGameType("difficult");
  hideMain();
  removeHidden(chooseFighterClassic);
  removeHidden(mushroomFighter);
  removeHidden(bigfootFighter);
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
  addHidden(resultsView);
  removeHidden(gameChoiceView);
  game.classicFighters = ['rock', 'paper', 'scissor'];
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
  centerChoose.innerText = "Choose your fighter!";
  addHidden(resultsView);
  removeHidden(chooseFighterClassic);
  if (game.gameType === "difficult") {
    displayDifficultGame();
  } else if (game.gameType === "classic") {
    displayClassicGame();
    game.classicFighters = ['rock', 'paper', 'scissor'];
  };
};

classicGame.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);
changeGameButton.addEventListener('click', returnToGameChoice);
rockFighter.addEventListener('click', function(event){
  playGame(event)});
paperFighter.addEventListener('click', function(event){
  playGame(event)});
scissorFighter.addEventListener('click', function(event){
  playGame(event)});
mushroomFighter.addEventListener('click', function(event){
  playGame(event)});
bigfootFighter.addEventListener('click', function(event){
  playGame(event)});
window.addEventListener('load', updateScore);
