import "./App.css";
import Card from "./lib/Card/Card";
import { Board } from "./lib/Board/Board";
import { initializeStack, cardPicker } from "./Stack";
import Hand from "./lib/Card/Hand";
import Coin from "./lib/Card/Coin";
import { useState } from "react";
import buildDeck from "./lib/Card/Deck";
import { checkBoard } from "./lib/Board/CheckBoard";
import { runSheldon } from "./lib/Opponent/Sheldon1";
import { updateHand } from "./UpdateHand";

let [stack, hand, handSheldon] = initializeStack();
let playerTurn = true;
function App() {
  const [getHandPlayer, setHandPlayer] = useState(hand);
  const [getHandSheldon, setHandSheldon] = useState(handSheldon);
  const [getBoard, setBoard] = useState(buildDeck("board"));

  const handleClickCard = async (i: number, name: string) => {
    let wasRemoval = false;
    const playerHasRedJacks = getHandPlayer.find(
      (c) => c.name == "JHearts" || c.name == "JDiamonds"
    );
    const playerHasBlackJacks = getHandPlayer.find(
      (c) => c.name == "JClubs" || c.name == "JSpades"
    );
    const playerHasCard = getHandPlayer.find((c) => c.name == name);
    const coinColor = playerTurn ? "Silver" : "Gold";
    const coinIsEmpty = getBoard[i].coin == "Empty";
    if (!coinIsEmpty && playerHasRedJacks) {
      getBoard[i].coin = "Empty";
      wasRemoval = true;
      playerTurn = !playerTurn;
      let arr = updateHand(stack, getHandPlayer, name, wasRemoval);
      setHandPlayer(arr[0]);
      stack = arr[1];
      setBoard([...getBoard]);
    }
    if (coinIsEmpty && (playerHasCard || playerHasBlackJacks)) {
      getBoard[i].coin = coinColor;
      playerTurn = !playerTurn;
      let arr = updateHand(stack, getHandPlayer, name, false);
      setHandPlayer(arr[0]);
      stack = arr[1];
      setBoard([...getBoard]);
    }

    checkBoard(getBoard);
    if (!playerTurn) {
      let cardIndexSheldon = await runSheldon(getBoard, getHandSheldon);
      playerTurn = true;
      let cardToRemove = getBoard[cardIndexSheldon].name;
      let arr = updateHand(stack, getHandSheldon, cardToRemove, false);
      setHandSheldon(arr[0]);
      stack = arr[1];
      getBoard[cardIndexSheldon].coin = "Gold";
      setBoard([...getBoard]);
    }
  };
  return (
    <div className="App">
      <Board handleClickCard={handleClickCard} getBoard={getBoard}></Board>
      <Hand hand={getHandPlayer}></Hand>
      <div className="zoomer">
        <Coin color={"Red"}></Coin>
      </div>
    </div>
  );
}

export default App;
