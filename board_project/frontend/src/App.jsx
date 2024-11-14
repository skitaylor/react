import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <h2>Board Project</h2>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
