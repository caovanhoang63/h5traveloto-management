import ReactECharts from "echarts-for-react";
import "./floorstatus.css";
import Chart from "../chart/chart";
export default function Floorstatus() {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data: ['Competed', 'Yet to Complete'],
        },
        series: [
            {
                bottom: 10,
                type: 'pie',
                radius: ['70%', '90%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: false,

                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 80, name: 'Competed' },
                    { value: 20, name: 'Yet to Complete' }
                ]
            }
        ],
        color: ['#0080FF', '#F2F2F2'] // Màu sắc tương ứng với dữ liệu
    };
    return (
        <div className="floorstatus-container">
            <h1 className="floorstatus-header">Floor status</h1>
            <Chart option={option}></Chart>


        </div>
    );

}