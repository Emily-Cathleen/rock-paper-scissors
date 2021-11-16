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
    return localStorage.setItem(`${this.name} wins`, stringifiedWins)


    // var currentWins = JSON.parse(localStorage.getItem("human"));
    // currentWins += 1;
    // var stringifiedHumanWins = JSON.stringify(currentWins);
    // localStorage.setItem("human", stringifiedHumanWins);
    // humanWins.innerText = stringifiedHumanWins;

    // var currentWins = JSON.parse(localStorage.getItem("computer"));
    // currentWins += 1;
    // var stringifiedComputerWins = JSON.stringify(currentWins);
    // localStorage.setItem("computer", stringifiedComputerWins);
    // computerWins.innerText = stringifiedComputerWins;
  };

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`${this.name} wins`);
    var parsedWinss = JSON.parse(retrievedWins);
    this.wins = parsedWins;

  };



};
