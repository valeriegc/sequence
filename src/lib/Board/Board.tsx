import Card from "../Card/Card";

export const Board = ({ getBoard, handleClickCard }) => {
  return (
    <div className="board">
      {getBoard.map((C, i) => (
        <div
          key={i}
          onClick={() => handleClickCard(i, C.name)}
          className={"pointer"}
        >
          <Card suit={C.suit} value={C.value} status={C.status} coin={C.coin} />
        </div>
      ))}
    </div>
  );
};
