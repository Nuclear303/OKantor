import { useEffect, useState } from "react";
import "./ValueArea.css"
export default function ValueArea({changed, val, ...props}){
    const [value, setValue] = useState(0);

    function test(event){
        if(changed != null){
            let val = event.target.value;
            if (val[0] === "0" && /[1-9]/.test(val[1])) {
                event.target.value = val.substring(1);
            }
            if(!/^[\d,.]{0,}$/.test(val)){
                event.target.value = val.substring(0, val.length - 1);
                return;
            }
            
            if((val.substring(val.length-1, val.length - 0) === "," || val.substring(val.length-1, val.length - 0) === ".") && (val.substring(0, val.length - 1).includes('.') || val.substring(0, val.length - 1).includes(','))){
                event.target.value = val.substring(0, val.length - 1);
                return;
            }
            
            if(val === ""){
                event.target.value = 0;
            }
    
            changed(event.target.value)
            setValue(event.target.value)
            console.log(event.target.value)
        } 
    }
    useEffect(()=>{
        if(changed == null){
            setValue(val);
        }
    },[changed, val]);
    return(
        <>
            <textarea onChange={test} aria-multiline="false" rows={1} {...props} value={value}>

            </textarea>
        </>
    )
}