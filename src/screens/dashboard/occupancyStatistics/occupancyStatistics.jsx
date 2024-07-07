import "./occupancyStatistics.css"
import Overviewtag from "../overview/overviewtag/overviewtag";
import Chart from "../chart/chart";
import {format} from 'date-fns';
import {useEffect, useState} from "react";
import {occupancyStatistic} from "../../../api/statistic";
const  dateOfWeek = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Statistics() {
    const   today = new Date().getDay();
    const curDay = "\"" +  format(Date.now(),"dd-MM-yyyy") + "\"";
    const [percentages, setPercentages] = useState([0,0,0, 0, 0,0,0])
    const  dates = dateOfWeek.slice(today+1).concat(dateOfWeek.slice(0,today +1))
    useEffect(() => {
        occupancyStatistic({date : curDay}).then((res) => {
            let newPercentage = []
            for (const item in res.data) {
                newPercentage.push(parseFloat(res.data[item])*100);
            }
            if (newPercentage) {
                setPercentages(newPercentage)
            }
        }).catch().finally()
    }, []);

    let chartOption = {
        xAxis: {
            type: 'category',
            data: dates
        },
        yAxis: {
            type: 'value'
        },
        height: 140,
        series: [
            {
                data: percentages,
                type: 'bar'
            }
        ]
    };
    return (
        <div className="statistics-container">
            <h1 className="statistics-header">Occupancy Statistics</h1>
            <div className="statistics-content">
                <Chart option={chartOption}></Chart>
            </div>

        </div>
    );
}
export default Statistics;