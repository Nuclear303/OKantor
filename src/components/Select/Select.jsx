import { useEffect, useState } from "react";
import db from "../../db.json"
import "./Select.css"
export default function Select({changed, ...props}){
    const [currencies, setCurrencies] = useState([]);

    useEffect(()=>{
        setCurrencies(Object.keys(db));
    },[]);

    function changedHandler(event){
        const text = event.target[event.target.selectedIndex].text;
        
        let object = Object.values(db).filter(obj=>{
            return obj.symbol === text;
        })[0]
        changed(object)
    }
    
    return(
        <select onChange={changedHandler} {...props}>
            <option>Wybierz walutę</option>
            {
                currencies.map(index=>{
                    return <option key={index}>{db[index].symbol}</option>
                })
            }
        </select>
    )
}