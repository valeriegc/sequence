import Diamonds from "./Diamonds";
import Clubs from "./Clubs";
import Hearts from "./Hearts";
import Spades from "./Spades";
import { Suit, Value, Coin, Status, Id } from "./CardTypes";

const Card = ({
  suit,
  value,
  coin,
  status,
  id,
}: {
  suit: Suit;
  value: Value;
  coin: Coin;
  status: Status;
  id: Id;
}) => {
  return (
    <div className="card">
      {(() => {
        switch (suit) {
          case "Spades":
            return <Spades value={value} />;
          case "Hearts":
            return <Hearts value={value} />;
          case "Clubs":
            return <Clubs value={value} />;
          case "Diamonds":
            return <Diamonds value={value} />;
        }
      })()}
    </div>
  );
};

export default Card;
