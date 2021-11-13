var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector('.difficult-game');


function displayClassicGame() {
  classicGame.classList.add('hidden');
  difficultGame.classList.add('hidden');

}

function displayDifficultGame() {
  classicGame.classList.add('hidden');
}


classicGame.addEventListener('click', displayClassicGame)
difficultGame.addEventListener('click', displayDifficultGame)
