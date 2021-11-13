var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');
var centerChoose = document.querySelector('.center-choose');
var gameChoiceView = document.querySelector('.game-choice-view');
var chooseFighterClassic = document.querySelector('.choose-fighter-classic');
var chooseFighterDifficult = document.querySelector('.choose-fighter-difficult');
var changeGameButton = document.querySelector('.change-game');


function addHidden(element) {
  element.classList.add('hidden');
}

function removeHidden(element) {
  element.classList.remove('hidden');
}

function displayClassicGame() {
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

classicGame.addEventListener('click', displayClassicGame)
difficultGame.addEventListener('click', displayDifficultGame)
changeGameButton.addEventListener('click', returnToGameChoice)
//create an EL that creates a variable choice that will lead to an event.target to get the Id of whatever was clicked.
//
