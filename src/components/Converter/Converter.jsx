import { useEffect, useState } from "react";
import Select from "../Select/Select";
import Swap from "../Swap/Swap";
import ValueArea from "../ValueArea/ValueArea";
import "./Converter.css"


export default function Converter(){
    const [inputCurrency, setInputCurrency] = useState({});
    const [outputCurrency, setOutputCurrency] = useState({});
    const [inputValue, setInputValue] = useState(0);
    const [outputValue, setOutputValue] = useState(0);
    

    function getInputCurr(input){
        setInputCurrency(input);
    }

    function getOutputCurr(input){
        setOutputCurrency(input);
    }

    function getInputVal(input){
        setInputValue(input);
    }

    function swapCurrencies(){
        let temp = inputCurrency;
        setInputCurrency(outputCurrency);
        setOutputCurrency(temp);
        [document.getElementById("input").value, document.getElementById("output").value] = [document.getElementById("output").value, document.getElementById("input").value];
    }

    useEffect(()=>{
        if(inputCurrency.symbol !== undefined && outputCurrency.symbol !== undefined){
            setOutputValue(((inputCurrency.price * inputValue) / outputCurrency.price).toFixed(2));
        }
    },[inputCurrency.symbol, inputCurrency.price, outputCurrency.symbol, outputCurrency.price, inputValue])
    
    return(
        
        <div className="converter">
            <div className="converter-column-1">
                <Select changed={getInputCurr} id="input"/>
                <ValueArea changed={getInputVal} val={null}/>
            </div>
            <div className="converter-column-2">
                <Swap click={swapCurrencies}/>
            </div>
            <div className="converter-column-3">
                <Select changed={getOutputCurr} id="output"/>
                <ValueArea changed={null} disabled={true} val={outputValue}/>
            </div>

        </div>
    )
}