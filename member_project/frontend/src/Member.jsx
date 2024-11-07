import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Save from "../../backend/Save";
import List from "../../backend/List";
import Header from "./Header";

function Member() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Save" element={<Save />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Member;
