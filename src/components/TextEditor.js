import React, {useState} from 'react'

function TextEditor(props) {
    const [text, setText] = useState('');
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    return (
        <div className='container mt-5'>
            <div className="d-flex align-items-start bg-white mb-3" style={{"height": "100px"}}>
                <div className="col-8 p-2">
                    <h3>{props.title}</h3>
                    <form className='mt-3'>
                        <div className="form-outline-dark mb-4">
                            <textarea className="form-control" value= {text} id="form4Example3" onChange={handleOnChange} rows="16" placeholder='Start Typing...'></textarea>
                        </div>
                        <button type="button" className="btn btn-dark">Save</button>
                    </form>  
                </div>
                <div className="col">
                    <h3>Editor Settings</h3><hr/>
                    <div className="row mt-2">
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <div className="d-flex align-items-center">
                                <button type="button" className="btn btn-dark" onClick={handleUpClick}>UpperCase</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <div className="d-flex align-items-center">
                                <button type="button" className="btn btn-dark" onClick={handleLowClick}>LowerCase</button>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 mb-4">
                            <div class="d-flex align-items-center">
                                <button type="button" class="btn btn-dark">Colour</button>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 mb-4">
                            <div class="d-flex align-items-center">
                                <button type="button" class="btn btn-dark">Text Style</button>
                            </div>
                        </div>
                    </div>
                    <h2> Your Text Summary</h2>
                    <p>{text.split(" ").length} words, {text.length} charactes</p>
                    <p>{text.split(" ").length*0.005} Minutes to Read</p>
                </div>
            </div>
        </div>
    )
}

export default TextEditor;