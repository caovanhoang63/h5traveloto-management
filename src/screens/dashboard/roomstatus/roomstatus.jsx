import "./roomstatus.css"
import Chart from "../chart/chart";
import Statistics from "../occupancyStatistics/occupancyStatistics";
import RoomstatusLabel, {RoomstatusLabelRight} from "./roomstatuslabel/roomstatuslabel";
import RoomstatusLabelLeft from "./roomstatuslabel/roomstatuslabel";
import {useEffect, useState} from "react";
import {overViewBooking, roomStatusStatistic} from "../../../api/statistic";
import {format} from "date-fns";

function RoomStatus() {
    const [roomStatus, setRoomStatus] = useState({})

    const today = "\"" +  format(Date.now(),"dd-MM-yyyy") + "\"";

    useEffect(() => {
        roomStatusStatistic({date: today.toString()}).then(
            res => {
               setRoomStatus(res.data)
            }
        ).catch().finally()
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