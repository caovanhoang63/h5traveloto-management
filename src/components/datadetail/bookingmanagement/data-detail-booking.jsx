import React from "react";
import "./data-detail-booking.css";
import { is } from "date-fns/locale";

function DataDetailBooking({ data, checkIn, checkOut, chooseRoom }) {
    const isCheckIn = () => {
        if (data.status === "Confirmed") {
            return false;
        } else return true;
    };

    const isCheckOut = () => {
        if (data.status === "Check-In") {
            return false;
        } else return true;
    };

    const isChooseRoom = () => {
        if (
            data.status === "Pending" ||
            data.status === "Paid" ||
            data.status === "Pay-In-Hotel"
        ) {
            return false;
        } else return true;
    };

    return (
        <div className="data-booking__container">
            <div className="data-booking__content">
                <div className="data-booking__field">
                    <span className="data-booking__field-title">
                        Booking ID
                    </span>
                    <span className="data-booking__field-content">
                        {data.id}
                    </span>
                </div>
                <div className="data-booking__field">
                    <span className="data-booking__field-title">
                        Room Quantity
                    </span>
                    <span className="data-booking__field-content">
                        {data.roomQuantity}
                    </span>
                </div>
                <div className="data-booking__field">
                    <span className="data-booking__field-title">Adults</span>
                    <span className="data-booking__field-content">
                        {data.adults}
                    </span>
                </div>
                <div className="data-booking__field">
                    <span className="data-booking__field-title">Children</span>
                    <span className="data-booking__field-content">
                        {data.children}
                    </span>
                </div>
                <div className="data-booking__field">
                    <span className="data-booking__field-title">Room Type</span>
                    <span className="data-booking__field-content">
                        {data.roomType}
                    </span>
                </div>
                <div className="data-booking__field">
                    <span className="data-booking__field-title">
                        Total Price
                    </span>
                    <span className="data-booking__field-content">
                        {data.final_amount + " VND"}
                    </span>
                </div>
                <div className="data-booking__field">
                    <span className="data-booking__field-title">
                        Start Date
                    </span>
                    <span className="data-booking__field-content">
                        {data.startDate}
                    </span>
                </div>
                <div className="data-booking__field">
                    <span className="data-booking__field-title">End Date</span>
                    <span className="data-booking__field-content">
                        {data.endDate}
                    </span>
                </div>
            </div>
            <div className="data-booking__container-button">
                <button
                    className="data-booking__button"
                    disabled={isCheckIn()}
                    onClick={() => checkIn()}
                >
                    Check In
                </button>
                <button
                    className="data-booking__button"
                    disabled={isCheckOut()}
                    onClick={() => checkOut()}
                >
                    Check Out
                </button>
                <button
                    className="data-booking__button"
                    disabled={isChooseRoom()}
                    onClick={() => chooseRoom()}
                >
                    Choose Room
                </button>
            </div>
        </div>
    );
}

export default DataDetailBooking;
