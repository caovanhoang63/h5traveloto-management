import React, { useState } from "react";
import {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import "./booking-management-page.css";
import IconFilter from "../../assets/icons/icon-filter.png";
import TextUnderline from "../../components/textunderline/texunderline";
import Table from "../../components/table/table";
import { Link } from "react-router-dom";

function BookingManagementPage() {
    const columns = [
        {
            Header: "No.",
            accessor: "no",
        },
        {
            Header: "Room type",
            accessor: "roomType",
        },
        {
            Header: "Room Quantity",
            accessor: "room Quantity",
        },
        {
            Header: "Start Date",
            accessor: "startDate",
        },
        {
            Header: "End Date",
            accessor: "endDate",
        },
    ];

    const data = [
        {
            no: 1,
            roomType: "Single",
            "room Quantity": 5,
            startDate: "Reserved",
            endDate: "Reserved",
        },
        {
            no: 2,
            roomType: "Double",
            "room Quantity": 10,
            startDate: "Available",
            endDate: "Available",
        },
        {
            no: 3,
            roomType: "Suite",
            "room Quantity": 2,
            startDate: "Available",
            endDate: "Available",
        },
        {
            no: 4,
            roomType: "Single",
            "room Quantity": 8,
            startDate: "Booked",
            endDate: "Booked",
        },
        {
            no: 5,
            roomType: "Double",
            "room Quantity": 6,
            startDate: "Reserved",
            endDate: "Reserved",
        },
    ];

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
            <div className="booking-table">
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}

export default BookingManagementPage;
