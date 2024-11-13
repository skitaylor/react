import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Save from "./pages/Save";
import List from "./pages/List";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h2>회원프로젝트</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
