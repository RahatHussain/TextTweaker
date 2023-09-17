import { useState } from "react"
import React from "react"

export default function TextForm(props) {
  const [text, setText] = useState("")

  // method for converting to upercase
  const handleUpClick = () => {
    console.log("Button Clicked")
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert("Text converted to Upper Case", "success")
  }
  // method for converting text to lower case
  const handleLowerClick = () => {
    console.log("Button Clicked")
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert("Text converted to Lower Case", "success")
  }

  // method for click Event
  const handleOnChange = (event) => {
    console.log("State Changed")
    setText(event.target.value)
  }
  //clear Text function
  const clearText = (event) => {
    console.log("")
    setText("")
    props.showAlert("Text Clear", "success")
  }
  //copy selectes text function
  const copyText = () => {
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Coppied to your Clipboard", "success")
  }
  //Remove Extra Space function
  const removeEspace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  return (
    <>
      <div
        className="mb-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading} </h1>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          placeholder="Type Something Here"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#6c757d",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UperCase
      </button>
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={handleLowerClick}
      >
        Convert to LowerCase
      </button>
      <button type="button" className="btn btn-light mx-2" onClick={clearText}>
        Clear Text
      </button>
      <button type="button" className="btn btn-dark mx-2" onClick={copyText}>
        Copy Text
      </button>
      <button
        type="button"
        className="btn btn-info mx-2"
        onClick={removeEspace}
      >
        Remove Extra Spaces
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length}Minutes is Required to Read This
          Article
        </p>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter Somthing in the Above TextArea to Preview it Here"}
        </p>
      </div>
    </>
  )
}
