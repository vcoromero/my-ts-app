export class CardGame {
  cards: number[] = [];
  playerOneDeck: number[] = [];
  playerOnePoints: number = 0;
  playerOnePile: number[] = [];
  playerTwoDeck: number[] = [];
  playerTwoPoints: number = 0;
  playerTwoPile: number[] = [];
  winner: string = "";

  fillCards(): void {
    for (let i = 0; i < 52; i++) {
      this.cards[i] = i + 1;
    }
  }

  shuffleCards(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  dealtCards(): void {
    this.playerOneDeck = this.cards.slice(0, 26);
    this.playerTwoDeck = this.cards.slice(26);
  }

  whoHadTopCard(): void {
    while (this.playerOneDeck.length > 0 && this.playerTwoDeck.length > 0) {
      const cardPlayerOne = this.playerOneDeck[0];
      const cardPlayerTwo = this.playerTwoDeck[0];

      if (cardPlayerOne > cardPlayerTwo) {
        this.playerOnePoints++;
        this.playerOnePile.push(cardPlayerOne);
        this.playerOneDeck.splice(0, 1);
      } else {
        this.playerTwoPoints++;
        this.playerTwoPile.push(cardPlayerTwo);
        this.playerTwoDeck.splice(0, 1);
      }
    }
  }

  whoWins(): void {
    if (this.playerOnePoints > this.playerTwoPoints) {
      this.winner = "Player one wins";
    } else if (this.playerOnePoints < this.playerTwoPoints) {
      this.winner = "Player two wins";
    } else {
      const topCardPlayerOne = Math.max(...this.playerOnePile);
      const topCardPlayerTwo = Math.max(...this.playerTwoPile);
      if (topCardPlayerOne > topCardPlayerTwo) {
        this.winner = "Player one wins";
      } else {
        this.winner = "Player two wins";
      }
    }
  }
}
