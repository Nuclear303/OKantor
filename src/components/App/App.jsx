
import Converter from "../Converter/Converter";
import Table from "../Table/Table";
import LineChart from "../LineChart/LineChart";
import "./App.css"


export default function App(){
    const labels = ['14 mar', '15 mar', '16 mar', '17 mar', '18 mar', '19 mar', '20 mar', '21 mar', '22 mar', '23 mar','24 mar', '25 mar', '26 mar', '27 mar','30 mar', '31 mar', '1 kwi', '2 kwi', '3 kwi', '4 kwi', '5 kwi', '6 kwi', '7 kwi', '8 kwi', '9 kwi', '10 kwi', '11 kwi', '12 kwi','13 kwi','14 kwi'];

    return(
        <div className="container">
            <h1>OKantor - OKantujemy cię na grosz.</h1>
            <Converter/>
            <Table/>
            <LineChart 
                title="USD - PLN"
                labels={labels}
                data={[3.9450, 3.9518, 3.9530, 3.9512, 3.9761, 3.9728, 3.9427, 3.9644, 3.9979, 3.9979, 3.9984, 3.9742, 3.9794, 3.9906, 3.9912, 3.9779, 3.9979, 3.9836, 4.0004, 3.9854, 3.9614, 3.9593, 3.9500, 3.9494, 3.9539, 3.9220, 3.9296, 3.9723, 3.9740, 4.0300]}
             />
            <LineChart
                title="EUR - PLN" 
                labels={labels}
                data={[4.2933, 4.3058, 4.3059, 4.2997, 4.3235, 4.3156, 4.3121, 4.3059, 4.3427, 4.3421, 4.3213, 4.3072, 4.3105, 4.3148, 4.3071, 4.2960, 4.2988, 4.2992, 4.2951, 4.2916, 4.2926, 4.2908, 4.2844, 4.2842, 4.2824, 4.2600, 4.2673, 4.2664, 4.2626, 4.3001]}
            />
        </div>
    )
}