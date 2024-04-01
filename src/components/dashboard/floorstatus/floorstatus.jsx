import ReactECharts from "echarts-for-react";
import "./floorstatus.css";
import Chart from "../chart/chart";
export default function Floorstatus() {
    const option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '70%'],
                    // adjust the start and end angle
                    startAngle: 180,
                    endAngle: 360,
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ]
                }
            ]
        };
    return (
        <div className="floorstatus-container">
            <h1 className="floorstatus-header">Occupancy Statistics</h1>
            <div className="floorstatus-content">
                <Chart option={option}></Chart>
            </div>

        </div>
    );

}