import { Timer } from "./TimerComponent.js";
import DynamicTimerCircle from "./DynamicTimerCircleComponent.js"

export default function Circle(props) {
  return (
    <div id="circle" className="circle-dimensions" >
      <DynamicTimerCircle/>
      <div id="timer-label">{props.timerLabelState}</div>
      <div id="time-left" style={props.timerColorState}>
        {props.minutesRendererFunction()}:{props.secondsRendererFunction()}
      </div>
      <Timer ref={props.beepRef}/>
    </div>
  );
}
