import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("This is Default Text");
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const Uppercase = () => {
        var NewText = text.toUpperCase()
        setText(NewText)
    }
    const Lowercase = () => {
        var NewText = text.toLowerCase()
        setText(NewText)
    }
    const Count = () => {
        var NewText = text.length
        alert(NewText)
    }
    const reverseText = () => {
        var NewText = text.split('').reverse().join('');
        setText(NewText)
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        alert("Text Copied")
        
    }
    const removeExtraSpaces = () => {
        var NewText = text.replace(/\s+/g, ' ').trim();
        setText(NewText)
         
      }
      const extractEmails = () =>{
        var NewText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        setText(NewText)
    }
    const extractUrls = () => {
        var NewText = text.match(/(https?:\/\/[^\s]+)/g);
       setText(NewText) 
      }
      const encodeToBase64 = () =>{
        var NewText =  btoa(text);
        setText(NewText)
      }
      const decodeFromBase64 = () =>{
        var NewText =  atob(text);
        setText(NewText)
      }
      

      
    return (

        <div>
            <div className="mb-3 text-center">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                <textarea className="form-control" onChange={handleChange} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
                
                <button type="button" onClick={Uppercase} className='btn btn-primary m-2'>Uppercase</button>
                <button type="button" onClick={Lowercase} className='btn btn-primary m-2'>Lowercase</button>
                <button type="button" onClick={Count} className='btn btn-primary m-2'>Count</button>
                <button type="button" onClick={reverseText} className='btn btn-primary m-2'>Reverse</button>
                <button type="button" onClick={copyText} className='btn btn-primary m-2'>Copy Text</button>
                <button type="button" onClick={removeExtraSpaces} className='btn btn-primary m-2'>RemoveExtraSpaces</button>
                <button type="button" onClick={extractEmails} className='btn btn-primary m-2'>extractEmails</button><br/>
                <button type="button" onClick={extractUrls} className='btn btn-primary m-2'>Extract Urls</button>
                <button type="button" onClick={encodeToBase64} className='btn btn-primary m-2'>encodeToBase64</button>
                <button type="button" onClick={decodeFromBase64} className='btn btn-primary m-2'>decodeFromBase64</button>









            </div>
        </div>
    )
}
