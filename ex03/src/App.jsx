import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Comp1 from "./comp1";
import Child from "./Child";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

function App() {
  return (
    <>
      <h1>app.jsx</h1>
      <Child p1="하이요" />
      <Child1 p2="ㅇㅋㄷㅋ요" />
      <Child2 p1="안뇽하쉐요" p2={100} p3="반괍습늬다" />
      <Child3
        p1="봉쥬르"
        p2={2942}
        p3="hi!!!"
        student={{ name: "학생이", age: 30 }}
      />
      {/* <Comp1 /> */}
    </>
  );
}

export default App;
