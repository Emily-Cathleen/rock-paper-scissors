class Player {
  constructor(name, token) {
    this.name = name;
    this.wins = 0;
    this.fighterChoice = '';
    this.token = token;
  }

  chooseFighter(fighter) {
    this.fighterChoice = fighter;

  }


};
