class Game {
  constructor(type) {
    this.human = human;
    this.computer = computer;
    this.type = type;
    this.winner = "";
    this.draw = true;
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
    this.draw = true;
    } 
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
