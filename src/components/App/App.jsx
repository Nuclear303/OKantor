import { useState } from "react"
import db from "../../db.json"

export default function App(){
    const [index, setIndex] = useState(0);


    return(
        <>
            <input type="number" name="" id="" value={db[Object.keys(db)[index]].price}/>
            <button onClick={_=>{setIndex(i => i+1)}}>click</button>
        </>
    )
}