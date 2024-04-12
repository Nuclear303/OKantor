import { useState } from "react"
import db from "../../db.json"
import Converter from "../Converter/Converter";
import "./App.css"
import "./reset.css"


export default function App(){


    return(
        <div className="container">
            <Converter/>
            {/* <input type="number" name="" id="" value={db[Object.keys(db)[index]].price}/>
            <button onClick={_=>{setIndex(i => i+1)}}>click</button> */}
        </div>
    )
}