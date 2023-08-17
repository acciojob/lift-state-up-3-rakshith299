import React,{useState} from "react";
import ReactDOM from "react-dom";
import Child1 from "./Child-1";
import Child2 from "./Child-2";
import "../styles/App.css";

const Parent = () => {
    const [selectedOption, setSelectedOption] = useState("");

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1 setSelectedOption = {setSelectedOption}/>
            <Child2 setSelectedOption = {setSelectedOption}/>

            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

export default Parent;