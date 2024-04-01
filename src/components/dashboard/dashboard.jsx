import Overview from "./overview/overview";
import Rooms from "./rooms/rooms";
import './dashboard.css';
import RoomstatusLabel from "./roomstatus/roomstatuslabel/roomstatuslabel";
import Feedback from "./feedback/feedback";
import Statistics from "./occupancyStatistics/occupancyStatistics";

function Dashboard({roomsdata,feedbackdata}) {

    return (

        <>
            <div className="dashboard-container">
                <div className="dashboard-content">
                    <Overview></Overview>
                    <Rooms data={roomsdata}/>
                    <div className="statistics-feedback-container">
                        <Statistics></Statistics>
                        <Feedback data={feedbackdata}></Feedback>
                    </div>
                    <div className="statistics-feedback-container">
                        <Statistics></Statistics>
                        <Feedback data={feedbackdata}></Feedback>
                    </div>

                </div>

            </div>
        </>

    )

}

export default Dashboard;