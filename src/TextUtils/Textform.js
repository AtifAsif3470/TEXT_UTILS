import { useState } from "react"

function Textform(props) {

    let handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    };
    let handleOnchange = (event) => {
        setText(event.target.value)
    };
    let handletoClear = () => {
        let newText = "";
        setText(newText)
    };
    let handleExtraspces = () => {
        let newtxt = text.split(/[ ]+/)
        setText(newtxt.join(" "))
    };
    let handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    };
    let [text, setText] = useState("");  // useState
    return (
        <> 
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#04213e" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "#04213e" : "white", color: props.mode === "dark" ? "white" : "#04213e" }} id="myBox" rows="8" onChange={handleOnchange}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert toUpperCase</button>
                <button type="button" className="btn btn-primary" onClick={handletoClear}>Clear To TextArea</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraspces}>Remove Extra spaces</button>
                <button type="button" className="btn btn-primary" onClick={handleCopy}>Copy TextArea</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#04213e" }}>
                <h2>Your Text Sumry</h2>
                <p>{text.split(/\s+/).filter((val) => { return val.length !== 0 }).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((val) => { return val.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Somthing In The Textbox Above To Preview It Here."}</p>
            </div>
        </>
    )
}
export default Textform;