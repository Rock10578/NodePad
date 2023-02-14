import React, {useState} from 'react'

function TextEditor(props) {
    const [text, setText] = useState('');
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","Success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","Success");
    }
    const handleToTitle = () => {
        let newText = text.toLowerCase().split(' ');
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(' '))
        props.showAlert("Converted to CamelCase","Success");
    }
    // const [theme, setTheme ] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const handleTheme = (e) => {
    //     console.log(e.value)
    //     if (e.value === 'Dark'){
    //         setTheme({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }else if (e.value === 'Light'){
    //         setTheme({
    //             color: 'red',
    //             backgroundColor: 'white'
    //         })
    //     }else if (e.target.value === 'Red'){
    //         setTheme({
    //             color: 'green',
    //             backgroundColor: 'black'
    //         })
    //     }else if (e.target.value === 'Green'){
    //         setTheme({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    // }

    return (
        <div className={`container mt-5 bg-${props.mode === 'dark'?'#090f1f':'light'}`}>
            <div className="d-flex align-items-start bg-white mb-3" style={{"height": "100px"}}>
                <div className={`col-8 p-2 bg-${props.mode === 'dark'?'black':'white'} text-${props.mode === 'light'?'dark':'light'}`}>
                    <h3>{props.title}</h3>
                    <form className={`mt-3 bg-${props.mode === 'dark'?'#090f1f':'light'}`}>
                        <div className="form-outline-dark mb-4">
                            <textarea className="form-control"  value= {text} id="form4Example3" onChange={handleOnChange} rows="16" placeholder='Start Typing...'></textarea>
                        </div>
                        <button type="button" className="btn btn-dark">Save</button>
                    </form>  
                </div>
                <div className={`col text-${props.mode === 'light'?'dark':'light'} bg-${props.mode === 'dark'?'black':'white'}`}>
                    <h3>Editor Settings</h3><hr/>
                    <div className="row mt-2" style={{backgroundColor: props.mode === 'dark'?'dark':'light'}}>
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
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <div className="d-flex align-items-center">
                                <button type="button" className="btn btn-dark" onClick={handleToTitle}>Title Text</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <div className="d-flex align-items-center">
                                <button type="button" className="btn btn-dark">Colour</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <div className="d-flex align-items-center">
                                <button type="button" className="btn btn-dark">Text Style</button>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-4">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                                Theme
                            </button>
                            <ul className="dropdown-menu bg-dark">
                            {/* onClick={(e)=>handleTheme(e.value)} */}
                                <li><button  value="Dark" type="button" className="btn btn-dark mt-1">Dark</button></li>
                                <li><button  value="Light" type="button" className="btn btn-dark mt-1">Light</button></li>
                                <li><button  value="Red" type="button" className="btn btn-dark mt-1">Red</button></li>
                                <li><button  value="Green" type="button" className="btn btn-dark mt-1">Green</button></li>
                            </ul>
                        </div>
                    </div>
                    <h2> Your Text Summary</h2>
                    <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words, {text.length} charactes</p>
                    <p>{text.split(" ").length*0.005} Minutes to Read</p>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default TextEditor;