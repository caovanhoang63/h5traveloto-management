import "./roomstatus.css"
import Chart from "../chart/chart";
import Statistics from "../occupancyStatistics/occupancyStatistics";
import RoomstatusLabel from "./roomstatuslabel/roomstatuslabel";

const mock_data = {
    "data": {

    }
}

function RoomStatus() {
    return (
        <div className={"roomstatus-container"}>
            <span className={"roomstatus-header"}>Room status</span>
            <div className={"roomstatus-content"}>
                    <RoomstatusLabel label={"Occupied rooms"} roomAmount={40} cleanAmount={90} dirtyAmount={4} inspectedAmount={60}></RoomstatusLabel>
                    <RoomstatusLabel label={"Occupied rooms"} roomAmount={40} cleanAmount={90} dirtyAmount={4} inspectedAmount={60}></RoomstatusLabel>

            </div>

        </div>);
}

export default RoomStatus;