import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Form(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","Success")
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","Success")
  };
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text has been Clear!","Success")
  };
  return (
    <>
      <div>
        <h1   style={{
             color: props.mode === "dark" ? "white" : "black",
            }}>{props.heading} </h1>

        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            placeholder="Enter the Text here"  style={{
                color: props.mode === "dark" ? "white" : "black",
               }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
            }}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}  style={{
             color: props.mode === "dark" ? "white" : "black",
            }}>{props.heading}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoClick}  style={{
                color: props.mode === "dark" ? "white" : "black",
               }}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}  style={{
                color: props.mode === "dark" ? "white" : "black",
               }}
          >
            Clear
          </button>
        </div>
      </div>
      <h2  style={{
             color: props.mode === "dark" ? "white" : "black",
            }}>{props.heading}>Text Summary</h2>
      <p  style={{
             color: props.mode === "dark" ? "white" : "black",
            }}>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}
        ).length} words and {text.length} characters
      </p>
      <p  style={{
             color: props.mode === "dark" ? "white" : "black",
            }}>{0.008 * text.split(" ").length} per minute</p>
      <h2  style={{
             color: props.mode === "dark" ? "white" : "black",
            }}>Preview</h2>  
      <p  style={{
             color: props.mode === "dark" ? "white" : "black",
            }}>
        {text.length > 0 ? text : "Enter the text in the Textarea to see Here"}
      </p>
    </>
  );
}
