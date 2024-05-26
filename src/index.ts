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
cardGame.whoWins();

console.log("Cartas:", cardGame.cards);
console.log("Player One Deck:", cardGame.playerOneDeck);
console.log("Player Two Deck:", cardGame.playerTwoDeck);
console.log("Player One Pile:", cardGame.playerOnePile);
console.log("Player One Points:", cardGame.playerOnePoints);
console.log("Player Two Points:", cardGame.playerTwoPoints);
console.log("Player Two Pile:", cardGame.playerTwoPile);
console.log(cardGame.winner);



// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
