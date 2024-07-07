import "./roomstatus.css"
import Chart from "../chart/chart";
import Statistics from "../occupancyStatistics/occupancyStatistics";
import RoomstatusLabel, {RoomstatusLabelRight} from "./roomstatuslabel/roomstatuslabel";
import RoomstatusLabelLeft from "./roomstatuslabel/roomstatuslabel";
import {useEffect, useState} from "react";
import {overViewBooking, roomStatusStatistic} from "../../../api/statistic";

function RoomStatus() {
    const [roomStatus, setRoomStatus] = useState({})

    const today = "\"07-07-2024\""
    useEffect(() => {
        roomStatusStatistic({date: today.toString()}).then(
            res => {
               setRoomStatus(res.data)
            }
        ).finally()
    }, []);
    return (
        <div className={"roomstatus-container"}>
            <span className={"roomstatus-header"}>Room status</span>
            <div className={"roomstatus-content"}>
                    <RoomstatusLabelLeft   availableAmount={roomStatus.available} dirtyAmount={roomStatus.dirty}></RoomstatusLabelLeft>
                    <RoomstatusLabelRight  bookedAmount={roomStatus.booked} fixingAmount={roomStatus.fixing}></RoomstatusLabelRight>
            </div>

        </div>);
}

export default RoomStatus;