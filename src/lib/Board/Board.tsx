import { useState } from "react";
import Card from "../Card/Card";
import buildDeck from "../Card/Deck";

//make a diagonal, vertical and horizontal check

const checkBoard = (board) => {
  let arr = board.map((c) => (c = c.coin));
  // horizontal;
  let pusherArr = [];
  let horizontalArr = [];
  for (let i = 0; i < 10; i++) {
    pusherArr = [];
    for (let j = i * 10; j < i * 10 + 10; j++) {
      pusherArr.push(arr[j]);
    }
    horizontalArr.push(pusherArr);
  }
  // vertical
  let verticalArr = [];

  for (let i = 0; i < 10; i++) {
    pusherArr = [];
    for (let j = 0; j < 10; j++) {
      pusherArr.push(horizontalArr[j][i]);
    }
    verticalArr.push(pusherArr);
  }
  //diagonal

  let diagonalLR = [];
  let runs = 10;
  // H start point is always 0

  for (let column = 0; column < 10; column++) {
    pusherArr = [];
    for (let row = 0; row < runs; row++) {
      pusherArr.push(horizontalArr[row + column][row]);
    }
    runs -= 1;
    diagonalLR.push(pusherArr);
  }
  runs = 10;

  for (let column = 0; column < 10; column++) {
    pusherArr = [];
    for (let row = 0; row < runs; row++) {
      pusherArr.push(horizontalArr[row][row + column]);
    }
    runs -= 1;
    diagonalLR.push(pusherArr);
  }

  let diagonalRL = [];
  runs = 10;

  for (let column = 9; column >= 0; column--) {
    pusherArr = [];
    for (let row = 0; row < runs; row++) {
      pusherArr.push(horizontalArr[row][column - row]);
    }
    runs -= 1;
    diagonalRL.push(pusherArr);
  }
  runs = 0;

  for (let row = 0; row <= 9; row++) {
    pusherArr = [];
    for (let column = 9; column >= runs; column--) {
      pusherArr.push(horizontalArr[row][column]);
    }
    runs += 1;
    diagonalRL.push(pusherArr);
  }
  let checkArr = [
    ...diagonalLR,
    ...diagonalRL,
    ...verticalArr,
    ...horizontalArr,
  ];

  let silver = 0;
  let gold = 0;
  for (let array of checkArr) {
    let joined = array.join("");
    if (/((Corner)|(Silver)){5}/.test(joined)) silver++;
    if (silver == 2) return "Silver won";
    if (/((Corner)|(Gold)){5}/.test(joined)) gold++;
    if (gold == 2) return "Gold won";
  }
};

let playerOneTurn = true;

export const Board = ({ hand, updateHand }) => {
  const [getDeck, setDeck] = useState(buildDeck("board"));
  checkBoard(getDeck);
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
        <div
          key={i}
          onClick={() => handleClick(i, C.name)}
          className={"pointer"}
        >
          <Card suit={C.suit} value={C.value} status={C.status} coin={C.coin} />
        </div>
      ))}
    </div>
  );
};
