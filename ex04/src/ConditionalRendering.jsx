import { useState } from "react";

function ConditionalRendering() {
  const condition = true;
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h2>그긴거.jsx</h2>
      {condition ? <h2>참</h2> : <h2>거짓</h2>}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </>
  );
}
export default ConditionalRendering;
