import { Value } from "./CardTypes";

const Hearts = ({ value }: { value: Value }) => (
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
        d="M20.42 55.95c-1.65-5.745-6.119-10.039-9.781-14.607-1.92-2.309-3.737-5.298-2.927-8.383.935-3.251 4.88-5.066 8.095-3.995 2.147.652 3.887 2.346 4.716 4.372.74-1.114 1.322-2.37 2.468-3.16 2.753-2.26 7.382-1.917 9.563.954 1.606 2.018 1.262 4.834.183 7.005-1.784 3.758-5.041 6.537-7.507 9.842-1.865 2.386-3.542 4.982-4.41 7.887-.06.138-.296.245-.4.085z"
        fill="red"
      />
    </g>
  </svg>
);

export default Hearts;
