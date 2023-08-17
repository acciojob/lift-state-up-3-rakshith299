import React,{useState} from "react";
import ReactDOM from "react-dom";

import "../styles/App.css";

const Child2 = ({setSelectedOption}) => {
    return(
        <div className="child-2">
            <h1>Child Component 2</h1>
            <button onClick={() => setSelectedOption("Option 2")}>Option 2</button>
        </div>
    )
}

export default Child2;