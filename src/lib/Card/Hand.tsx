import Card from "./Card";

const Hand = ({ hand }) => {
  return (
    <div className="hand">
      {hand.map((C) => (
        <div>
          <Card suit={C.suit} value={C.value} status={C.status} coin={C.coin} />
        </div>
      ))}
    </div>
  );
};

export default Hand;
