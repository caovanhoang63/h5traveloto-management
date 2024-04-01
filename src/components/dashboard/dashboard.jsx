import Overview from "./overview/overview";
import Rooms from "./rooms/rooms";
import './dashboard.css';
import RoomstatusLabel from "./roomstatus/roomstatuslabel/roomstatuslabel";

function Dashboard({data}){
    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-content" >
                    <Overview></Overview>
                    <Rooms data={data}/>
                    <RoomstatusLabel label={"Dirty"} amount={"90"}></RoomstatusLabel>
                </div>

            </div>
        </>

    )

}

export default Dashboard;