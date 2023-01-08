import { useState } from "react";
import Card from "../Card/Card";
import buildDeck from "../Card/Deck";

let turn = 0;
export const Board = () => {
  const [getDeck, setDeck] = useState(buildDeck("board"));

  const handleClick = (i: number) => {
    turn += 1;
    console.log(turn);
    if (turn % 2 == 0) getDeck[i].coin = "Silver";
    else getDeck[i].coin = "Gold";
    setDeck([...getDeck]);
  };

  return (
    <div className="board">
      {getDeck.map((C, i) => (
        <div onClick={() => handleClick(i)}>
          <Card suit={C.suit} value={C.value} status={C.status} coin={C.coin} />
        </div>
      ))}
    </div>
  );
};
