import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Demo</h1>
      <h2> {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
export default Counter;
