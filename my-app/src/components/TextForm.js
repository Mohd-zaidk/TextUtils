import React, {useState} from 'react'


export default function TextForm(props) {
  
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText  (newText)
    }
    const handleLowClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText  (newText)
    }
    const handleOnChange = (event) =>{
        //console.log("onChange");
        setText(event.target.value);
    }
    const handleSentenceCase = () =>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText  (newText)
    }
    const handleCapitalizzedCase = () =>{
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText  (newText)
    }
    const handleAlterCase = () =>{
        let newText = text.toUpperCase().split(' ').map(word => word.charAt(0).toLowerCase() + word.slice(1)).join(' ');
        setText  (newText)
    }
    const handleClear=() =>{
        let newText = '';

        setText(newText)
    }
    const [text, setText ] = useState('');
  return (
    <>
    <div className="container"  >
        <h1>{props.heading}  </h1>
        <div className="mb-3">
            <label htmlFor="myText" className="form-label"> </label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' :'light'}} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence case</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizzedCase}>Capitalized Case</button>
        <button className="btn btn-primary mx-2" onClick={handleAlterCase}>aLTERNATIVE cASE</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>


    </div>
    <div className="container mt-100 " style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.trim() === ""  ? 0 :text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * text.split (" ") .length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  </> 
  )
}
