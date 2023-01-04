import { Suit } from "./CardTypes";

const buildDeck = () => {
  const deck = [];
  let givenSuit: Suit;
  for (let j = 0; j < 8; j++) {
    if (j == 0 || j == 4) {
      givenSuit = "Hearts";
    } else if (j == 1 || j == 5) {
      givenSuit = "Diamonds";
    } else if (j == 2 || j == 6) {
      givenSuit = "Spades";
    } else {
      givenSuit = "Clubs";
    }

    for (let i = 1; i < 13; i++) {
      if (i == 1) {
        deck.push({
          suit: givenSuit,
          coin: "empty",
          status: false,
          value: "A",
        });
      } else if (i > 1 && i < 11) {
        deck.push({
          suit: givenSuit,
          coin: "empty",
          status: false,
          value: i,
        });
      } else if (i == 11) {
        deck.push({
          suit: givenSuit,
          coin: "empty",
          status: false,
          value: "Q",
        });
      } else if (i == 12) {
        deck.push({
          suit: givenSuit,
          coin: "empty",
          status: false,
          value: "K",
        });
      }
    }
  }
  return deck
};
export default buildDeck

//valerie@Valeries-MacBook-Pro sequence % ts-node --transpileOnly --esm src/lib/Card/Deck.ts