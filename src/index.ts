import express, { Request, Response } from "express";
import { CardGame } from "./function/CardGame";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

const cardGame = new CardGame();
cardGame.fillCards();
cardGame.shuffleCards();
cardGame.dealtCards();
cardGame.whoHadTopCard();
console.log(cardGame.cards);
console.log(cardGame.playerOneDeck);
console.log(cardGame.playerTwoDeck);
console.log(cardGame.playerOnePoints);
console.log(cardGame.playerTwoPoints);
console.log(cardGame.playerOnePile);
console.log(cardGame.playerTwoPile);
cardGame.whoWins();


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
