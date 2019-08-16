import React, { useState } from "react";

function HookCounter() {
  //initialCount is  initial state of the component.
  //setCount is  a emthod to update  using useState Hook.
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count:{count} &nbsp;
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default HookCounter;
