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
  centerChoose.innerHTML = `<p class="center-choose">Choose your fighter!</p>`
  addHidden(gameChoiceView);
  removeHidden(changeGameButton);
}



classicGame.addEventListener('click', displayClassicGame)
difficultGame.addEventListener('click', displayDifficultGame)
