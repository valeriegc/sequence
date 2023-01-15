import { useState } from "react";
import Card from "../Card/Card";
import buildDeck from "../Card/Deck";

let playerOneTurn = true;

export const Board = ({ hand, updateHand }) => {
  const [getDeck, setDeck] = useState(buildDeck("board"));

  const handleClick = (i: number, name: string) => {
    let wasRemoval = false;
    const playerHasRedJacks = hand.find(
      (c) => c.name == "JHearts" || c.name == "JDiamonds"
    );
    const playerHasBlackJacks = hand.find(
      (c) => c.name == "JClubs" || c.name == "JSpades"
    );
    const playerHasCard = hand.find((c) => c.name == name);
    const coinColor = playerOneTurn ? "Silver" : "Gold";
    const coinIsEmpty = getDeck[i].coin == "Empty";
    if (!coinIsEmpty && playerHasRedJacks) {
      getDeck[i].coin = "Empty";
      wasRemoval = true;
      playerOneTurn = !playerOneTurn;
      updateHand(name, wasRemoval);
      setDeck([...getDeck]);
    }
    if (coinIsEmpty && (playerHasCard || playerHasBlackJacks)) {
      getDeck[i].coin = coinColor;
      playerOneTurn = !playerOneTurn;
      updateHand(name);
      setDeck([...getDeck]);
    }
  };
  return (
    <div className="board">
      {getDeck.map((C, i) => (
        <div onClick={() => handleClick(i, C.name)} className={"pointer"}>
          <Card suit={C.suit} value={C.value} status={C.status} coin={C.coin} />
        </div>
      ))}
    </div>
  );
};
