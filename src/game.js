class Game {
  constructor(gameType) {
    this.human = new Player("human", "./assets/woman.png");
    this.computer = new Player("computer", "./assets/desktop.png");
    this.gameType = gameType || "classic";
    this.winner = "";
    this.draw = true;
    this.classicFighters = ["rock", "paper", "scissor"];
    this.message = "";
  };

  selectGameType(gameType) {
    this.gameType = gameType || "classic";
    if (gameType === "difficult" && this.classicFighters.length < 5) {
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
};
