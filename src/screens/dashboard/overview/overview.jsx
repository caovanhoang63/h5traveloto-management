import "./overview.css";
import Overviewtag from "./overviewtag/overviewtag";
import {DasboardBalance} from "../balance/dasboard-balance";
function Overview() {
    return(
        <div className="overview-container">
            <div className={"header-container"}>
                <h1 className="overview-header">Overview</h1>
                <DasboardBalance></DasboardBalance>
            </div>
            <div className="overview-content">
                <Overviewtag label={"Check-in"} contentNumber={'23'} header={"Today's"}></Overviewtag>
                <Overviewtag label={"Check-out"} contentNumber={'13'} header={"Today's"}></Overviewtag>
                <Overviewtag label={"Customers"} contentNumber={'60'} header={"Total"}></Overviewtag>
                <Overviewtag label={"Available room"} contentNumber={'23'} header={"Total"}></Overviewtag>
                <Overviewtag label={"Booked room"} contentNumber={'90'} header={"Total"}></Overviewtag>
            </div>
        </div>
    );
}
export default Overview;