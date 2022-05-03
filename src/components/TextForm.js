import React ,{useState}from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('enter your text here');
  
  const handleUpClick=()=>{
   //console.log("upper case was clicked"+text);
   let newText=text.toUpperCase();
   setText(newText);
   props.showAlert("convert into uppercase!","success")

  }

  const handleLoClick=()=>{
    //console.log("upper case was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("convert into lowercase!","success")
  }

  const handleClearClick=()=>{
    let newText=''
    setText(newText);
    props.showAlert("cleared","success")
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("removed extra spaces!","success")
  }
   
  const handleCopy=()=>{
    var text=document.getElementById("my box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!","success")

  }
  
  
  
  const handleOnChange=(event)=>{
   console.log("on change")
   setText(event.target.value)
  }
  
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control"  value={text} id="my box" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
          <button className="btn btn-outline-primary  mx-2"onClick={handleUpClick}>covert into uppercase</button>
          <button className="btn btn-outline-primary  mx-2 "onClick={handleLoClick}>covert into lowercase</button>
          <button className="btn btn-outline-primary  mx-2 "onClick={handleClearClick}>clear</button>
          <button className="btn btn-outline-primary  mx-2 "onClick={handleCopy}>copy</button>
          <button className="btn btn-outline-primary  mx-2 "onClick={handleExtraSpace}>Remove Extra space</button>
        </div>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length}words and {text.length}character</p>
    <p>{0.008*text.split(" ").length}minutes read</p>
    <h2>preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
