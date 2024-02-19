import React from "react";
import ReactDOM from "react-dom/client";
import Intro from "./components/Intro";
import Song from "./components/Song";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Intro />
    <Song />
  </React.StrictMode>
);
