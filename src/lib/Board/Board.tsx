import { useState } from "react";
import Card from "../Card/Card";
import buildDeck from "../Card/Deck";

let turn = 0;
export const Board = ({ hand, updateHand }) => {
  const [getDeck, setDeck] = useState(buildDeck("board"));
  const handleClick = (i: number, name: string) => {
    if (hand.find((c) => c.name == name)) {
      turn += 1;
      if (turn % 2 == 0) {
        getDeck[i].coin = "Silver";
        getDeck[i].status = false;
      } else {
        getDeck[i].coin = "Gold";
        getDeck[i].status = false;
      }
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
