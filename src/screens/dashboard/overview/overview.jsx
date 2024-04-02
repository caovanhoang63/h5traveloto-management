import "./overview.css";
import Overviewtag from "./overviewtag/overviewtag";
function Overview() {
    return(
        <div className="overview-container">
            <h1 className="overview-header">Overview</h1>
            <div className="overview-content">
                <Overviewtag label={"Check-in"} contentNumber={'23'} header={"Today's"}></Overviewtag>
                <Overviewtag label={"Check-out"} contentNumber={'13'} header={"Today's"}></Overviewtag>
                <Overviewtag label={"In hotel"} contentNumber={'60'} header={"Total"}></Overviewtag>
                <Overviewtag label={"Available room"} contentNumber={'23'} header={"Total"}></Overviewtag>
                <Overviewtag label={"Occupied room"} contentNumber={'90'} header={"Total"}></Overviewtag>
            </div>
        </div>
    );
}
export default Overview;