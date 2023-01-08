import { Coin, Status, Suit, Value } from "./CardTypes";

const buildDeck = (location) => {
  const deck: {
    suit: Suit;
    value: Value;
    coin: Coin;
    status: Status;
    name: string
  }[] = [];
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
          coin: "Empty",
          status: false,
          value: "A",
          name: "A" + givenSuit
        });
      } else if (i > 1 && i < 11) {
        deck.push({
          suit: givenSuit,
          coin: "Empty",
          status: false,
          value: i as unknown as Value, 
          name: i + givenSuit
        });
      } else if (i == 11) {
        deck.push({
          suit: givenSuit,
          coin: "Empty",
          status: false,
          value: "Q",
          name: "Q" + givenSuit
        });
      } else if (i == 12) {
        deck.push({
          suit: givenSuit,
          coin: "Empty",
          status: false,
          value: "K",
          name: "K"+ givenSuit
        });
      }
    }
  }
  if (location == "board") {
  let cardToPush = {
    suit: "Corner",
    coin: "Corner",
    status: false,
    value: "C",
    name: "C" + givenSuit
  }
  deck.push(cardToPush)
  deck.unshift(cardToPush)
  deck.splice(9, 0, cardToPush)
  deck.splice(90, 0, cardToPush)
  }
  return deck
};
export default buildDeck

//valerie@Valeries-MacBook-Pro sequence % ts-node --transpileOnly --esm src/lib/Card/Deck.ts