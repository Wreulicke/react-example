import React from "react";
import ReactDOM from "react-dom";
import Window from "./script/app.jsx";
document.addEventListener("DOMContentLoaded",init);
function init() {
  ReactDOM.render(<Window />,document.getElementById("test"));
}