import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Member from "./member";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Member />
  </StrictMode>
);
