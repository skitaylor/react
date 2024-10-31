import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./info";
function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/Info">Info</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
