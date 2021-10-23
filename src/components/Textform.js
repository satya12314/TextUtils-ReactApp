

import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpperCaseClick = () => {

        let Newtext = text.toUpperCase();
        setText(Newtext)
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleExtraSpaceClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }
    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    const [text, setText] = useState('');

    const wordCounter = (str) => {
        if (str.length === 0) { return 0; }
        str = str.replace(/(^\s*)|(\s*$)/gi, "");  //remove start and end spaces of a string
        str = str.replace(/[ ]{2,}/gi, " ");  // reduce multiple spaces to a single space.
        str = str.replace(/\n /, "\n");  // exclude a new line with a start spacing.
        return str.split(/\s+/).length;   //return the no of words
    }

    const CharCounter = (str) => {
        str = str.replace(/ /g, '');
        return str.length;   //return the no of words
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>Text Summary</h2>
                <p>your text contains <b> {wordCounter(text)} </b> words and <b> {CharCounter(text)} </b> characters </p>
                <p>Time taken to read the text <b> {0.008 * wordCounter(text)} </b> minutes</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>

            </div>
        </>
    )
}








