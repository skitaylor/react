import { useState } from "react";

function Form1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const inputName = (e) => {
    console.log("호출확인용");
    //console.log(e.target.value);
    setName(e.target.value);
  };
  const inputAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      <h2>Form1.jsx</h2>
      이름: <input type="text" value={name} onChange={inputName} />
      입력한 이름: {name}
      나이: <input type="text" value={age} onChange={inputAge} />
      입력한 나이: {age}
      {/* 나이: <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/> */}
    </>
  );
}
export default Form1;
