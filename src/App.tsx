import "./App.css";
import Card from "./lib/Card/Card";
import { Board } from "./lib/Board/Board";
import { initializeStack } from "./Stack";
import Hand from "./lib/Card/Hand";

function App() {
  let [stack, hand] = initializeStack();
  return (
    <div className="App">
      <Board></Board>
      <Hand hand={hand}></Hand>
    </div>
  );
}

export default App;
