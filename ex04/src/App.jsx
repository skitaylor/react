import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import ConditionalRendering from "./ConditionalRendering";

function App() {
  const [count, setCount] = useState(0);
  const up = () => {
    // alert("up 함수 호출!");
    setCount(count + 1);
  };
  const down = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>count값: {count}</h2>
      {/* 클릭하면 count 값을 하나 올리는 Up 함수호출 */}
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <Form1 />
      <Form2 />
      <ConditionalRendering />
    </>
  );
}

export default App;
