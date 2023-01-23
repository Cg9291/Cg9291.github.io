export default function Break(props) {
  return (
    <div
      id="break"
      className="time-modifiers"
    >
      <div
        id="break-label"
        className="labels"
      >
        Break Length
      </div>
      <div className="btn-row">
        <button
          id="break-increment"
          className="fa fa-arrow-up fa-2x settings-buttons increment-buttons"
          onClick={props.breakHandlerFunction}
        ></button>
        <div
          id="break-length"
          className="length-values"
        >
          {props.breakLengthState}
        </div>
        <button
          id="break-decrement"
          className="fa fa-arrow-down fa-2x settings-buttons decrement-buttons"
          onClick={props.breakHandlerFunction}
        ></button>
      </div>
    </div>
  );
}
