import "./roomstatus.css"
import Chart from "../chart/chart";
import Statistics from "../occupancyStatistics/occupancyStatistics";
import RoomstatusLabel, {RoomstatusLabelRight} from "./roomstatuslabel/roomstatuslabel";
import RoomstatusLabelLeft from "./roomstatuslabel/roomstatuslabel";

const mock_data = {
    "data": {

    }
}

function RoomStatus() {
    return (
        <div className={"roomstatus-container"}>
            <span className={"roomstatus-header"}>Room status</span>
            <div className={"roomstatus-content"}>
                    <RoomstatusLabelLeft label={"Booked rooms"} roomAmount={40} cleanAmount={90} dirtyAmount={4} inspectedAmount={60}></RoomstatusLabelLeft>
                    <RoomstatusLabelRight label={"Available rooms"} roomAmount={40} inspectedAmount={60}></RoomstatusLabelRight>

            </div>

        </div>);
}

export default RoomStatus;