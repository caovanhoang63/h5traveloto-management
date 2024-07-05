import "./PendingBooking.css";
import FeedbackBlock from "./feedbackBlock/feedbackBlock";
import { useEffect, useState } from "react";
import { listReviews } from "../../../api/reviews";
import {PendingBookingBlock} from "./PendingBookingBlock/PendingBookingBlock";

function PendingBooking() {

    const func = () => {
        console.log("clicked");};

    return (
        <div className="feedback-container">
            <h1 className="feedback-header">Pending Booking</h1>
            <div className="feedback-blocks">
                <PendingBookingBlock onClick={func} roomTypeName={"Phòng đơn"} quantity={10} startDate={"05/07/2024"} endDate={"06/07/2024"} ></PendingBookingBlock>

            </div>
        </div>
    );
}
export default PendingBooking;
