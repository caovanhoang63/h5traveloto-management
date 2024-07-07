import Overview from "./overview/overview";
import Rooms from "./rooms/rooms";
import './dashboard.css';
import RoomstatusLabel from "./roomstatus/roomstatuslabel/roomstatuslabel";
import PendingBooking from "./feedback/PendingBooking";
import Statistics from "./occupancyStatistics/occupancyStatistics";
import RoomStatus from "./roomstatus/roomstatus";
import CustomersFeedback from "./floorstatus/CustomersFeedback";
import {useLayoutEffect} from "react";


function Dashboard({roomsdata}) {

    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-content">
                    <Overview></Overview>
                    {/*<Rooms data={roomsdata}/>*/}
                    <div className={"roomstatus-floorstatus-container"}>
                        <RoomStatus></RoomStatus>
                        <CustomersFeedback></CustomersFeedback>
                    </div>
                    <div className="statistics-feedback-container">
                        <Statistics></Statistics>
                        <PendingBooking></PendingBooking>
                    </div>

                </div>

            </div>
        </>

    )

}

export default Dashboard;