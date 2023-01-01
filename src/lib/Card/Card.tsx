import Diamonds from "./Diamonds";
import Clubs from "./Clubs";
import Hearts from "./Hearts";
import Spades from "./Spades";
import { Suit, Value } from "./CardTypes";

const Card = ({ suit, value }: { suit: Suit; value: Value }) => {
  return (
    <div>
      {(() => {
        switch (suit) {
          case "S":
            return <Spades value={value} />;
          case "H":
            return <Hearts value={value} />;
          case "C":
            return <Clubs value={value} />;
          case "D":
            return <Diamonds value={value} />;
        }
      })()}
    </div>
  );
};

export default Card;
