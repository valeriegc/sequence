import { Value } from "./CardTypes";

const Diamonds = ({ value }: { value: Value }) => (
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
      <text
        x="50%"
        y={25.55}
        fill="red"
        fontFamily="Verdana"
        fontWeight="bold"
        letterSpacing={0}
        wordSpacing={0}
        fontSize={28}
        style={{
          lineHeight: 1.25,
          textAnchor: "middle",
        }}
        xmlSpace="preserve"
      >
        {value}
      </text>
      <path
        d="M20.84 27.64c-2.978 4.956-6.33 9.723-9.737 14.302 3.567 4.579 6.973 9.346 9.737 14.302 2.871-5.05 6.01-9.865 9.737-14.302a121.45 121.45 0 0 1-9.737-14.302z"
        fill="red"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export default Diamonds;
