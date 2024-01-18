import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const convertToUpperCaseBtn = () => {
    document.getElementById("formTextArea").value = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert("Text is converted into Upper-Text.", "success");
  };

  const convertToLowerCaseBtn = () => {
    document.getElementById("formTextArea").value = text.toLowerCase();
    setText(text.toLowerCase());
    props.showAlert("Text is converted into Lower-Text.", "success");
  };

  const clearTextBtn = () => {
    document.getElementById("formTextArea").value = "";
    setText("");
    props.showAlert("Text has been Cleared.", "success");
  };

  const copyTextBtn = (event) => {
    document.getElementById("formTextArea").select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text has copied. ", "success");
  };

  const handleOnChangeText = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <h2>{props.title}</h2>
      <div className="my-3">
        <textarea
          className={`form-control border border-${
            props.themeMode === "dark" ? "white" : "black"
          }`}
          id="formTextArea"
          rows="10"
          placeholder="Enter Text Here"
          onChange={handleOnChangeText}
          style={{
            backgroundColor:
              props.themeMode === "light" ? "white" : "rgb(15 16 18)",
            color: props.themeMode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>

      <div className="d-flex my-3">
        <div className="mx-2">
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "" : "outline-"
            }success`}
            onClick={convertToUpperCaseBtn}
          >
            Convert To Upper Case
          </button>
        </div>
        <div className="mx-2">
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "" : "outline-"
            }success`}
            onClick={convertToLowerCaseBtn}
          >
            Convert To Lower Case
          </button>
        </div>
        <div className="mx-2">
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "" : "outline-"
            }success`}
            onClick={clearTextBtn}
          >
            Clear Text
          </button>
        </div>
        <div className="mx-2">
          <button
            className={`btn btn-${
              props.themeMode === "light" ? "" : "outline-"
            }success`}
            onClick={copyTextBtn}
          >
            Copy Text
          </button>
        </div>
        <div className="mx-2 d-flex fs-5">
          <div className="mx-2">Total Characters : {text.length}</div>
          <div className="mx-2">
            Total Words : {text.split(/\s+/).length - 1}
          </div>
        </div>
      </div>
      <div className="conatiner my-3">
        <h2>Preview</h2>
        <div>{text}</div>
      </div>
    </>
  );
}

TextForm.protoTypes = {
  title: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  title: "Enter Text Here",
};
