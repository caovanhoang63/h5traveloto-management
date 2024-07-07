import "./overview.css";
import Overviewtag from "./overviewtag/overviewtag";
import {DasboardBalance} from "../balance/dasboard-balance";
import {useEffect, useState} from "react";
import {overViewBooking} from "../../../api/statistic";
import {Spin} from "antd";
function Overview() {
    const [overView, setOverView] = useState({})
    const today = "\"07-07-2024\""
    useEffect(() => {
        overViewBooking({date: today.toString()}).then(
            res => {
                setOverView(res.data)
            }
        ).finally()
    }, []);

    return(
        <div className="overview-container">
            <div className={"header-container"}>
                <h1 className="overview-header">Overview</h1>
                <DasboardBalance></DasboardBalance>
            </div>
            <div className="overview-content">
                <Overviewtag label={"Check-in"} contentNumber={overView.total_checked_in}
                             header={"Today's"}></Overviewtag>
                <Overviewtag label={"Check-out"} contentNumber={overView.total_checked_in}
                             header={"Today's"}></Overviewtag>
                <Overviewtag label={"Customers"} contentNumber={overView.total_in_hotel}
                             header={"Total"}></Overviewtag>
            </div>
        </div>
    );
}

export default Overview;