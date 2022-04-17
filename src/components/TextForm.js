/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const HandleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const ChangeUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  return (
    <>
      <div className="container mt-3">
        <div className=" mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={HandleonChange}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <div className="btn btn-primary" onClick={ChangeUpperCase}>
          {" "}
          Change to UpperCase
        </div>
      </div>
    </>
  );
}
