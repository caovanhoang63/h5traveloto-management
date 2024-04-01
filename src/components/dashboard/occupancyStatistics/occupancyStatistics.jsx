import "./occupancyStatistics.css"
import Overviewtag from "../overview/overviewtag/overviewtag";
import Chart from "../chart/chart";

function Statistics() {
    const chartOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
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