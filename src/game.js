class Game {
  constructor(type) {
    this.human = new Player('human');
    this.computer = new Player('computer');
    this.type = type;
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.difficultFighters = ['rock', 'paper', 'scissors', 'mushroom', 'bigfoot'];
  }

evaluateClassicWinConditions() {
  if (this.human.choice === "rock" && this.computer.choice === "paper") {
    }
}

evaluateDifficultWinConditions() {
  if(){}
}

evaluateDraw(){

}

checkWinCondition(){
if (this.type === classic) {
    evaluateClassicWinConditions()
} else if( this.type === difficult) {
  evaluateDifficultWinConditions()
}
evaluateDraw();
}

}
