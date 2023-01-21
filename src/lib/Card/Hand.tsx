import Card from "./Card";

const Hand = ({ hand }) => {
  return (
    <div className="hand">
      {hand.map((C, i) => (
        <div key={i}>
          <Card suit={C.suit} value={C.value} status={C.status} coin={C.coin} />
        </div>
      ))}
    </div>
  );
};

export default Hand;
