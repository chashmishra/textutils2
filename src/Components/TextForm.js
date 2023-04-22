import React, { useState } from "react";

export default function TextForm(props) {
// This is the pending task for laer... please complete
  const handleFreqClick=(e)=>{
    //console.log("Uppercase was clicked" + text);
    let newtext = text.current.value;
    setText(newtext.wordSelectionCount(" ").count);
};
  const handleUpClick=()=>{
    //console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase !", "success")
};
const handleLoClick=()=>{
    //console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
};
const handleOnChange=(event)=>{
    //console.log("on change");
    setText(event.target.value);
};

  const [text, setText] = useState('')
  // text = "new text"; wrong way to change text
  // setText = "new text"; right way
  return (
    <h1>
    <div className="container" style={{color: props.mode === 'dark'?'white': 'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Gauranga Nityananda
        </label>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8" 
          onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'black': 'white', color: props.mode === 'dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-2"  onClick={handleFreqClick}>Find frequency</button>
    </div>
    <div className="container m-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2> Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} mins took to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      <p></p>
    </div>
    
    </h1>
  );
}
