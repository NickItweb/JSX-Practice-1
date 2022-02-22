import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const num = 7;

ReactDOM.render(
  <div>
    <h1>My Favourite {name}!</h1>
    <p>Your luck Number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
