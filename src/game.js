class Game {
  constructor(gameType) {
    this.human = new Player('human', './assets/woman.png');
    this.computer = new Player('computer', './assets/desktop.png');
    this.gameType = gameType || "classic";
    this.winner = '';
    this.draw = true;
    this.classicFighters = ['rock', 'paper', 'scissor'];
    this.difficultFighters = ['rock', 'paper', 'scissor', 'mushroom', 'bigfoot'];
    this.message = '';
  };

  selectGameType(gameType) {
    this.gameType = gameType;
    if (gameType === "difficult") {
      this.classicFighters.push("mushroom", "bigfoot");
    }
  }

  winnerUpdate() {
    this.winner = "human";
    this.human.retrieveWinsFromStorage();
    this.human.wins += 1;
    this.human.saveWinsToStorage();
    this.message = "Human won this round!";
  };

  evaluateWinConditions() {
    if (this.human.fighterChoice === "rock" && (this.computer.fighterChoice === "scissor" || this.computer.fighterChoice === "mushroom")) {
      this.winnerUpdate();
    } else if (this.human.fighterChoice === "paper" && (this.computer.fighterChoice === "rock" || this.computer.fighterChoice === "bigfoot")) {
      this.winnerUpdate();
    } else if (this.human.fighterChoice === "scissor" && (this.computer.fighterChoice === "paper" || this.computer.fighterChoice === "bigfoot")) {
      this.winnerUpdate();
    } else if (this.human.fighterChoice === "mushroom" && (this.computer.fighterChoice === "scissor" || this.computer.fighterChoice === "paper")) {
      this.winnerUpdate();
    } else if (this.human.fighterChoice === "bigfoot" && (this.computer.fighterChoice === "rock" || this.computer.fighterChoice === "mushroom")) {
      this.winnerUpdate();
    } else if (this.human.fighterChoice === this.computer.fighterChoice) {
      this.winner = "";
      this.message = "It's a draw!"
    } else {
      this.winner = "computer";
      this.computer.retrieveWinsFromStorage();
      this.computer.wins += 1;
      this.computer.saveWinsToStorage();
      this.message = "Computer won this round!"
    };
  };

// evaluateClassicWinConditions() {
//   if (this.human.fighterChoice === "rock" && this.computer.fighterChoice === "paper") {
//     this.winner = "computer";
//     this.computer.wins += 1;
//   } else if (this.human.fighterChoice === "rock" && this.computer.fighterChoice === "scissor") {
//     this.winner = "human";
//     this.human.wins += 1;
//   } else if (this.human.fighterChoice === "scissor" && this.computer.fighterChoice === "paper") {
//     this.winner = "human";
//     this.human.wins += 1;
//   } else if (this.human.fighterChoice === "scissor" && this.computer.fighterChoice === "rock") {
//     this.winner = "computer";
//     this.computer.wins += 1;
//   } else if (this.human.fighterChoice === "paper" && this.computer.fighterChoice === "rock") {
//     this.winner = "human";
//     this.human.wins += 1;
//   } else if (this.human.fighterChoice === "paper" && this.computer.fighterChoice === "scissor") {
//     this.winner = "computer";
//     this.computer.wins += 1;
//   }
// };
//


// evaluateDifficultWinConditions() {
//   if (this.human.fighterChoice === "rock" && (this.computer.fighterChoice === "scissor" || this.computer.fighterChoice === "mushroom")) {
//     this.winner = "human";
//     this.human.wins += 1;
// } else if (this.human.fighterChoice === "paper" && (this.computer.fighterChoice === "rock" || this.computer.fighterChoice === "bigfoot")) {
//     this.winner = "human";
//     this.human.wins += 1;
// } else if (this.human.fighterChoice === "scissor" && this.computer.fighterChoice === "paper") {
//     this.winner = "human";
//     this.human.wins += 1;
// } else if (this.human.fighterChoice === "scissor" && this.computer.fighterChoice === "rock") {
//     this.winner = "computer";
//     this.computer.wins += 1;
// } else if (this.human.fighterChoice === "paper" && this.computer.fighterChoice === "rock") {
//     this.winner = "human";
//     this.human.wins += 1;
// } else if (this.human.fighterChoice === "paper" && this.computer.fighterChoice === "scissor") {
// }
// };

};

//
//
// checkWinCondition(){
//   if (this.gameType === classic) {
//     evaluateClassicWinConditions()
//   } else if( this.gameType === difficult) {
//     evaluateDifficultWinConditions()
//   }
// evaluateDraw()
// }
// }
//
//
