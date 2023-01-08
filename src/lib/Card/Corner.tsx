import { Value } from "./CardTypes";
import Coin from "./Coin";

const Corner = () => (
  <div className="cornerCard">
    <svg viewBox="0 0 41 61" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect
          x={0.5}
          y={0.5}
          width={40}
          height={60}
          rx={10}
          ry={12}
          fill="#fff"
          stroke="#000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
    <div className="cornerCoin">
      <Coin color="Red" />
    </div>
  </div>
);

export default Corner;
