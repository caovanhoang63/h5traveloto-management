import "./occupancyStatistics.css"
import Overviewtag from "../overview/overviewtag/overviewtag";
import Chart from "../chart/chart";

const  dateOfWeek = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Statistics() {
    let  today = new Date().getDay();
    let dates = dateOfWeek.slice(today+1).concat(dateOfWeek.slice(0,today +1))

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
                data: [120, 200, 150, 80, 70, 110, 130],
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