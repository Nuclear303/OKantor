import { useState } from "react";
import db from "../../db.json";
import Select from "../Select/Select";


export default function Converter(){
    const [inputCurrency, setInputCurrency] = useState("");
    const [outputCurrency, setOutputCurrency] = useState("");

    function getInputCurr(input){
        setInputCurrency(input)
    }

    function getOutputCurr(input){
        setOutputCurrency(input)
    }
    return(
        <div id="converter">
            <Select changed={getInputCurr}/>
            <Select changed={getOutputCurr}/>
            {/* <Swap/>
            <ValueArea/>
            <ValueArea/> */}
        </div>
    )
}