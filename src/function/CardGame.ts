export class CardGame {
  cards: number[] = [];
  playerOneDeck: number[] = [];
  playerOnePoints: number = 0;
  playerOnePile: number[] = [];
  playerTwoDeck: number[] = [];
  playerTwoPoints: number = 0;
  playerTwoPile: number[] = [];

  fillCards() {
    for (let i = 1; i <= 52; i++) {
      this.cards.push(i);
    }
    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  dealtCards() {
    this.playerOneDeck = this.cards.slice(0, 26);
    this.playerTwoDeck = this.cards.slice(26);
  }

  whoHadTopCard() {
    let i = 0;
    while (i < 26) {
      const cardPlayerOne = this.playerOneDeck[i];
      const cardPlayerTwo = this.playerTwoDeck[i];

      if (cardPlayerOne > cardPlayerTwo) {
        this.playerOnePoints++;
        this.playerOnePile.push(cardPlayerOne);
        this.playerOneDeck.splice(i, 1);
      } else {
        this.playerTwoPoints++;
        this.playerTwoPile.push(cardPlayerTwo);
        this.playerTwoDeck.splice(i, 1);
      }
      i++;
    }
  }

  whoWins() {
    if (this.playerOnePoints > this.playerTwoPoints) {
      console.log("Player one wins");
    } else if (this.playerOnePoints < this.playerTwoPoints) {
      console.log("Player two wins");
    } else {
      const topCardPlayerOne = Math.max(...this.playerOnePile);
      const topCardPlayerTwo = Math.max(...this.playerTwoPile);
      if (topCardPlayerOne > topCardPlayerTwo) {
        console.log("Player one wins");
      } else {
        console.log("Player two wins");
      }
    }
  }
}


/*
 this is a two player card game

 the game starts with a deck of 52 cards represented as unique integers [1...52]

 the cards are randomly shuffled and then dealt out to both players evenly

 on each turn:
 both players turn over their top card
 the player with the higher valued card takes the cards and puts them in their scoring pile
(scoring 1 point per card)

 this continues until all the players have no cards left
 the player with the highest score wins
 
 if they have the same number of cards in their win pile, tiebreaker goes to the player with
the highest card in their win pile
*/
