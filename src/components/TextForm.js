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
    props.showAlert("Converted in UpperCase", "success");
  };
  const ChangeLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted in LowerCase", "success");
  };

  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text ", "success");
  };
  const RemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces ", "success");
  };
  const CopyText = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is coppied to clipboard ", "success");
  };

  return (
    <>
      <div
        className="container mt-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className=" mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={HandleonChange}
            id="textBox"
            rows="10"
            placeholder="write text here."
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <div className="btn btn-primary" onClick={ChangeUpperCase}>
          Change to UpperCase
        </div>
        <div className="btn btn-primary mx-1" onClick={ChangeLowerCase}>
          Change to LowerCase
        </div>

        <div className="btn btn-primary mx-1" onClick={ClearText}>
          Clear text
        </div>

        <div className="btn btn-primary mx-1" onClick={CopyText}>
          Copy Text
        </div>
        <div
          className="container card border-info mb-3 my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        >
          <h2>Your Text Summary</h2>
          <p>
            <b>Characters : </b>
            {text.trim().length}{" "}
          </p>
          <p>
            <b>Words : </b>
            {
              text
                .replace(/\n/g, " ")
                .split(" ")
                .filter((value) => value !== "").length
            }{" "}
          </p>
          <p>
            <b>No of Sentences : </b>
            {text.split(/[".!?"]/).length - 1}{" "}
          </p>
        </div>
        <div
          className="container card border-info mb-3 my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        >
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "write something to preview "}</p>
        </div>
      </div>
    </>
  );
}
