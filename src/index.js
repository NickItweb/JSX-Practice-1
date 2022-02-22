import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const currentDate = new Date();
const year = currentDate.getFullYear();
const img =
  "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 className="heading">Created by {name}!</h1>
    <div>
      <img className="bg-img" src={img + "?grayscale"} />
      <img
        className="bg-img"
        src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg?grayscale"
      />
      <img
        className="bg-img"
        src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x900.jpg"
      />
    </div>
    <p>Copyright {year}</p>

    <h1 style={customStyle}>Inline styling in JSX</h1>
  </div>,
  document.getElementById("root")
);
