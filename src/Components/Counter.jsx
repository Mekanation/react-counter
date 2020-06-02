import React, { useState } from "react";
import Display from "./Display";
import ButtonPad from "./ButtonPad";

function Counter() {
  const [count, setCount] = useState(0);
  const [lastCount, setLastCount] = useState(0);
  return (
    <div className="counter">
      <Display count={count} lastCount={lastCount} />
      <ButtonPad
        setCount={setCount}
        count={count}
        lastCount={lastCount}
        setLastCount={setLastCount}
      />
    </div>
  );
}

export default Counter;
