export default function Session(props) {
  return (
    <div
      id="session"
      className="time-modifiers"
    >
      <div
        id="session-label"
        className="labels"
      >
        Session Length
      </div>
      <div className="btn-row">
        <button
          id="session-increment"
          className="fa fa-arrow-up fa-2x increment-buttons settings-buttons "
          onClick={props.sessionHandlerFunction}
        ></button>
        <div
          id="session-length"
          className="length-values"
        >
          {props.sessionLengthState}
        </div>
        <button
          id="session-decrement"
          className="fa fa-arrow-down fa-2x decrement-buttons settings-buttons"
          onClick={props.sessionHandlerFunction}
        ></button>
      </div>
    </div>
  );
}
