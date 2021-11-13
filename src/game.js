class Game {
  constructor(type) {
    this.human = new Player('human');
    this.computer = new Player('computer');
    this.type = type;
    this.winner = "";
    this.classicFighters = ['rock', 'paper', 'scissor'];
    this.difficultFighters = ['rock', 'paper', 'scissor', 'mushroom', 'bigfoot'];
  }

evaluateClassicWinConditions() {
  if (this.human.choice === "rock" && this.computer.choice === "paper") {
    this.winner = "computer";
    this.computer.wins += 1;
  } else if (this.human.choice === "rock" && this.computer.choice === "scissor") {
    this.winner = "human";
    this.human.wins += 1;
  } else if (this.human.choice === )
}

evaluateDifficultWinConditions() {
  if(this.human.choice === "rock" && ){

  }
}

evaluateDraw(human, computer){
  if (this.human.choice === this.computer.choice) {
    this.winner = "";
    this.draw = true;
  } else {
    this.draw = false;
  }
  }

checkWinCondition(){
  if (this.type === classic) {
    evaluateClassicWinConditions()
  } else if( this.type === difficult) {
    evaluateDifficultWinConditions()
  }
evaluateDraw()
}
}

}
