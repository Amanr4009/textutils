import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    console.log("button is clicked");
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }

  const Capatlise = () => {
    let newText = Text.split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };
  const handleExtraSpace= ()=>{
    let newText=Text.split(/[ ]+/);
    setText(newText.join(' '))
  }
  const handleloclick = () => {
    console.log("button is clicked");
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const Clear = () => {
    setText("");
  };
  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [Text, setText] = useState("");
  // setText('newtext');
  return (
    <>
      <div className="container" style={{color : props.mode ==='dark'?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control "
            value={Text}
            onChange={handleonchange}
            id="myBox"
            style={{ height: "150px" ,backgroundColor : props.mode ==='dark'?"grey":"white" , color : props.mode ==='dark'?"white":"black"}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={Capatlise}>
          Capatlise the text
        </button>
        <button className="btn btn-primary mx-3" onClick={Clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
          Remove Extra spaces
        </button>
      </div>
      <div className="container my-3 " style={{color : props.mode ==='dark'?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>
          word {Text.split(" ").length} and character {Text.length}
        </p>
        <p>word {0.008 * Text.split(" ").length} Minutes To Read</p>
        <h2> Preview Text</h2>
        <p>{Text.length>0?Text:"Enter something to Preview it here"}</p>
      </div>
        

        
      
    </>
  );
}
