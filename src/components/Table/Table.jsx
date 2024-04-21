import db from "../../db.json"
import "./Table.css"

export default function Table(){
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Waluta</th>
                        <th>Kupno</th>
                        <th>Sprzedaż</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(db).map((obj, index)=>{
                            if(obj!=="pln" && index < 11){
                                return (
                                    <tr key={db[obj].symbol.split(" ")[0]}>
                                        <td>{db[obj].symbol.split(" ")[0]}</td>
                                        <td>{Number(db["pln"].price*db[obj].price*1.03).toFixed(4)}</td>
                                        <td>{Number(db["pln"].price*db[obj].price*0.98).toFixed(4)}</td>
                                    </tr>
                                )
                            }
                            return"";
                            
                        })
                    }
                </tbody>
            </table>
        </>
    )
}