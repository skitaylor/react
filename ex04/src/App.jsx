import { useState } from "react";
import Form1 from "./Form1";
function App() {
  const [count, setCount] = useState(0);
  const up = () => {
    //alert("up 함수 호출");
    setCount(count + 1);
  };
  const down = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>count값:{count}</h2>
      {/* 클릭하면 count 값을 하나 올리는 up 함수 호출 */}
      <button onClick={up}>up</button>
      <button onClick={down}>down</button>
      <Form1 />
    </>
  );
}

export default App;
