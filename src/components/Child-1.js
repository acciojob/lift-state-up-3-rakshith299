import React,{useState} from "react";
import ReactDOM from "react-dom";
import Child2 from "./Child-2";
import "../styles/App.css";

const Child1 = ({setSelectedOption}) => {
    return(
        <div className="child-1">
            <h1>Child Component 1</h1>
            <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
        </div>
    )
}

export default Child1;