import arrows from "../../res/images/swap.png"
import "./Swap.css"
export default function Swap({click}) {

    return(
        <div className="swap">
            <img src={arrows} onClick={click} alt="Zamień waluty"/>
        </div>
    )
}