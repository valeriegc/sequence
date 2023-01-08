import "./App.css";
import Card from "./lib/Card/Card";
import { Board } from "./lib/Board/Board";
import { initializeStack } from "./Stack";
import Hand from "./lib/Card/Hand";
import Coin from "./lib/Card/Coin";

function App() {
  let [stack, hand] = initializeStack();
  return (
    <div className="App">
      <Board></Board>
      <Hand hand={hand}></Hand>
      <div className="zoomer">
        <Coin color={"Red"}></Coin>
      </div>
    </div>
  );
}

export default App;
