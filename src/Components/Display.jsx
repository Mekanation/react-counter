import React from "react";
import FlipNumbers from "react-flip-numbers";

function Display(props) {
  return (
    <section className="display">
      <div className="left-div">
        Current Count:{" "}
        <FlipNumbers
          height={30}
          width={30}
          color="white"
          background="black"
          play
          perspective={200}
          numbers={`${props.count}`}
        />
      </div>

      <div className="right-div">
        Last Count:
        <FlipNumbers
          height={30}
          width={30}
          color="white"
          background="black"
          play
          perspective={200}
          numbers={`${props.lastCount}`}
        />
      </div>
    </section>
  );
}

export default Display;
