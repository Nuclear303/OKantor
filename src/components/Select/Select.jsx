import db from "../../db.json"
export default function Select({changed}){

    function changedHandler(event){
        const text = event.target[event.target.selectedIndex].text;
        
        let object = Object.values(db).filter(obj=>{
            return obj.symbol === text;
        })[0]
        console.log(object.symbol)
        changed(object)
    }

    return(
        <select onChange={changedHandler}>
            {
                Object.keys(db).map(index=>{
                    return <option>{db[index].symbol}</option>
                })
            }
        </select>
    )
}