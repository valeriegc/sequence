import "./App.css";
import Card from "./lib/Card/Card";
import { Board } from "./lib/Board/Board";
import { initializeStack, cardPicker } from "./Stack";
import Hand from "./lib/Card/Hand";
import Coin from "./lib/Card/Coin";
import { useState } from "react";

let [stack, hand] = initializeStack();
function App() {
  const [getHand, setHand] = useState(hand);

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
  return (
    <div className="App">
      <Board hand={getHand} updateHand={updateHand}></Board>
      <Hand hand={getHand}></Hand>
      <div className="zoomer">
        <Coin color={"Red"}></Coin>
      </div>
    </div>
  );
}

export default App;
