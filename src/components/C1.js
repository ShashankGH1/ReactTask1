import React,{useState} from "react";
function C1(){
    const[text,setText]=useState("");
    const wordCount=text.split(/\s+/).filter(Boolean).length;
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    return(
        <div>
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea placeholder="Enter text" rows="7" cols="40" onChange={handleChange}></textarea>
            <p>Word Count: {wordCount}</p>
        </div>
    )
}
export default C1;