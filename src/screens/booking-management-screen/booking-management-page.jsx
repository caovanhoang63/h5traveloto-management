import React, { useState } from "react";
import {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import "./booking-management-page.css";
import IconFilter from "../../assets/icons/icon-filter.png";
import TextUnderline from "../../components/textunderline/texunderline";
import { Link } from "react-router-dom";

function BookingManagementPage() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const buttons = ["Check-In", "Confirm", "Pending", "Cancel & Checked-Out"];
    return (
        <div className="booking-container">
            <div className="booking-header">
                <div className="booking-type">
                    {buttons.map((button, index) => (
                        <TextUnderline
                            key={index}
                            textUnderline={button}
                            isFocused={focusedIndex === index}
                            onClick={() => setFocusedIndex(index)}
                        />
                    ))}
                </div>
                <div className="booking-option">
                    <TransparentButton
                        className={"booking-option__button-filter-sort"}
                        border={true}
                        icon={"trailing"}
                        src={IconFilter}
                        alt=""
                    >
                        Filter
                    </TransparentButton>
                    <TransparentButton
                        className={"booking-option__button-filter-sort"}
                        border={true}
                        icon={"trailing"}
                        src={IconFilter}
                        alt=""
                    >
                        Sort
                    </TransparentButton>
                    <Link to="/frontdesk" className="booking-link">
                        <PrimaryButton
                            className={"booking-option__button-create"}
                            onClick={() => console.log("Create Booking")}
                        >
                            Create Booking
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookingManagementPage;
