import Circle from "./CircleComponent.js";

export default function DynamicTimerCircle(props) {
  return (
    <svg
      id="dynamic-timer-circle-svg"
      className="circle-dimensions"
      viewBox="-50 -50 100 100"
    >
      <g>
        <circle
          cx="0"
          cy="0"
          r="45"
          stroke="black"
          strokeOpacity="0.1"
          strokeWidth="10"
          fill="none"
        />
        <path
          id="circle-path"
          d="
           M 0, 0
           m -45, 0
           a 45 45 0 0,1 90,0
           a 45 45 0 0,1 -90,0
         "
          strokeDasharray={props.timeRatioState}
          stroke={props.ringColorState}
          strokeOpacity={props.ringOpacityState}
          //transform="rotate(-45deg)"
        ></path>
      </g>
    </svg>
  );
}
