class Player {
  constructor(name, token) {
    this.name = name;
    this.wins = 0;
    this.fighterChoice = '';
    this.token = token;
  }

  chooseFighter(fighter) {
    if (!fighter) {
      return this.fighterChoice = getRandomIndex(game.classicFighters);
    }
    return this.fighterChoice = fighter;
  };

  saveWinsToStorage() {
    var currentWins = this.wins;
    var stringifiedWins = JSON.stringify(currentWins);
    localStorage.setItem(`${this.name} wins`, stringifiedWins);
  };

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`${this.name} wins`);
    var parsedWins = JSON.parse(retrievedWins);
    this.wins = parsedWins;

  };



};
