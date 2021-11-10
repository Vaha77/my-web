import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/body";
import Card from "./components/Card";
import Navbar from "./components/navbar";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Card />
  </React.StrictMode>,
  document.getElementById("root")
);
