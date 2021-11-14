var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');
var centerChoose = document.querySelector('.center-choose');
var gameChoiceView = document.querySelector('.game-choice-view');
var chooseFighterClassic = document.querySelector('.choose-fighter-classic');
var chooseFighterDifficult = document.querySelector('.choose-fighter-difficult');
var changeGameButton = document.querySelector('.change-game');
// var selectFighter = document.querySelectorAll('.fighter-button');
var rockFighter = document.querySelector('[data-type="rock"]');
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
  addHidden(resultsView);
};

function playGame() {
  human = new Player('human');
  computer = new Player('computer');
  game = new Game(human, computer, 'classic');
  var fighter = event.target.dataset.type || event.target.parentNode.dataset.type;
  human.chooseFighter(fighter);
  computer.chooseFighter(getRandomIndex(game.classicFighters));
  game.evaluateClassicWinConditions();
  displayResults();
  setTimeout(resetGame, 2000);
};

function displayResults() {
  addHidden(chooseFighterClassic);
  removeHidden(resultsView);
  selectedFighter();
  if (game.winner === 'human') {
      var currentWins = JSON.parse(localStorage.getItem("human"))
      currentWins += 1;
      var stringifiedHumanWins = JSON.stringify(currentWins);
      localStorage.setItem("human", stringifiedHumanWins);
      humanWins.innerText = stringifiedHumanWins;
       centerChoose.innerText = "Human won this round!"
  } else if (game.winner === 'computer') {
      var currentWins = JSON.parse(localStorage.getItem("computer"))
      currentWins += 1;
      var stringifiedComputerWins = JSON.stringify(currentWins);
      localStorage.setItem("computer", stringifiedComputerWins);
      computerWins.innerText = stringifiedComputerWins;
      centerChoose.innerText = "Computer won this round!"
  } else {
       centerChoose.innerText = "It's a draw!"
  }
};

function selectedFighter() {
  humanFighter.src = `./assets/${human.fighterChoice}.png`
  console.log("test")
  computerFighter.src = `./assets/${computer.fighterChoice}.png`
};

function resetGame() {
  console.log('emily')
  addHidden(resultsView);
  if (game.gameType === 'classic') {
    displayClassicGame();
  } else if (game.gameType === 'difficult') {
    displayDifficultGame();
  }

};

//local storage






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
