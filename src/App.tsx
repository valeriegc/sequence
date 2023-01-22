import "./App.css";
import Card from "./lib/Card/Card";
import { Board } from "./lib/Board/Board";
import { initializeStack, cardPicker } from "./Stack";
import Hand from "./lib/Card/Hand";
import Coin from "./lib/Card/Coin";
import { useState } from "react";
import buildDeck from "./lib/Card/Deck";
import { checkBoard } from "./lib/Board/CheckBoard";

let [stack, hand] = initializeStack();
let playerOneTurn = true;
function App() {
  const [getHand, setHand] = useState(hand);
  const [getBoard, setBoard] = useState(buildDeck("board"));

  const updateHand = (name, wasRemoval) => {
    let index = getHand.findIndex((c) => c.name == name);
    if (index == -1 && !wasRemoval) {
      index = getHand.findIndex(
        (c) => c.name == "JSpades" || c.name == "JClubs"
      );
    } else if (index == -1 && wasRemoval) {
      index = getHand.findIndex(
        (c) => c.name == "JHearts" || c.name == "JDiamonds"
      );
    }
    let [newStack, card] = cardPicker(stack);
    getHand.splice(index, 1, card);
    setHand([...getHand]);
    stack = newStack;
  };
  const handleClickCard = (i: number, name: string) => {
    let wasRemoval = false;
    const playerHasRedJacks = getHand.find(
      (c) => c.name == "JHearts" || c.name == "JDiamonds"
    );
    const playerHasBlackJacks = getHand.find(
      (c) => c.name == "JClubs" || c.name == "JSpades"
    );
    const playerHasCard = getHand.find((c) => c.name == name);
    const coinColor = playerOneTurn ? "Silver" : "Gold";
    const coinIsEmpty = getBoard[i].coin == "Empty";
    if (!coinIsEmpty && playerHasRedJacks) {
      getBoard[i].coin = "Empty";
      wasRemoval = true;
      playerOneTurn = !playerOneTurn;
      updateHand(name, wasRemoval);
      setBoard([...getBoard]);
    }
    if (coinIsEmpty && (playerHasCard || playerHasBlackJacks)) {
      getBoard[i].coin = coinColor;
      playerOneTurn = !playerOneTurn;
      updateHand(name, false);
      setBoard([...getBoard]);
    }

    checkBoard(getBoard);
    //runSheldon(getBoard);
  };
  return (
    <div className="App">
      <Board handleClickCard={handleClickCard} getBoard={getBoard}></Board>
      <Hand hand={getHand}></Hand>
      <div className="zoomer">
        <Coin color={"Red"}></Coin>
      </div>
    </div>
  );
}

export default App;
