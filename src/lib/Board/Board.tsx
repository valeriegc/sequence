import Card from "../Card/Card";
import buildDeck from "../Card/Deck";

export const Board = () => {
  const deck = buildDeck();
  return (
    <div className="board">
      {deck.map((C) => (
        <div>
          <Card suit={C.suit} value={C.value} status={C.status} coin={C.coin} />
        </div>
      ))}
    </div>
  );
};
