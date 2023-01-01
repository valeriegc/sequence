import { Value } from "./CardTypes";

const Spades = ({ value }: { value: Value }) => (
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
        d="M13.26 38.22c-9.029 9.249-.178 15.958 6.96 11.542-1.348 4.818-2.089 5.197-2.907 6.466h7.707c-.99-1.281-2.028-1.648-3.08-6.438 7.287 4.198 14.968-3.124 6.882-11.57-5.29-4.64-7.343-8.875-7.781-9.476-.421.501-2.9 4.923-7.781 9.475z"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.084}
      />
    </g>
  </svg>
);

export default Spades;
