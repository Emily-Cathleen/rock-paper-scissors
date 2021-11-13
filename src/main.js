var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');
var centerChoose = document.querySelector('.center-choose');

function displayClassicGame() {
  hideMain();

}

function displayDifficultGame() {
  hideMain();
}

function hideMain() {
  centerChoose.innerHTML = `<p class="center-choose">Choose your fighter!</p>`
  classicGame.classList.add('hidden');
  difficultGame.classList.add('hidden');

}

classicGame.addEventListener('click', displayClassicGame)
difficultGame.addEventListener('click', displayDifficultGame)
