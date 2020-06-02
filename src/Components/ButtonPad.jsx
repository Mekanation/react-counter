import React from "react";

export default function ButtonPad(props) {
  return (
    <div className="buttons">
      <button onClick={() => props.setCount(props.count + 1)}>+1</button>
      <button onClick={() => props.setCount(props.count - 1)}>-1</button>
      <button onClick={() => props.setCount(props.count + 5)}>+5</button>
      <button onClick={() => props.setCount(props.count - 5)}>-5</button>
      <button
        onClick={() => {
          props.setLastCount(props.count);
          props.setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
}
