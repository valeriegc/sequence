import type { Value } from "./CardTypes";
const Clubs = ({ value }: { value: Value }) => (
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
      <path
        d="M18.47 40.54c-4.287-2.112-10.593.407-9.1 6.09 1.453 5.54 7.732 4.324 9.903.952-.906 6.393-2.496 7.388-3.45 8.776h10.123c-1.026-1.484-2.888-2.383-3.98-8.863 2.188 3.366 8.765 4.532 10.198-.926 1.41-5.37-4.945-8.428-9.17-5.997 4.052-2.806 5.507-12.023-2.167-12.023-7.75 0-6.456 9.397-2.357 11.991z"
        color="#000"
        display="block"
        stroke="#000"
        strokeWidth={0.134}
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
    </g>
  </svg>
);

export default Clubs;
