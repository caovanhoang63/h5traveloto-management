import React, { useState, useEffect } from "react";
import {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import "./booking-management-page.css";
import IconFilter from "../../assets/icons/icon-filter.png";
import TextUnderline from "../../components/textunderline/texunderline";
import Table from "../../components/table/table";
import { Link } from "react-router-dom";
import PageNavigation from "../../components/pagenavigation/pagenavigation";

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

    const rowsData = 6;
    const [selectedCategory, setSelectedCategory] = useState("checkIn");
    const [pageOfTable, setPageOfTable] = useState();
    const [tableData, setTableData] = useState([]);
    const [records, setRecords] = useState({
        checkIn: [],
        confirm: [],
        pending: [],
        cancelCheckedOut: [],
    });
    //Fetch data
    useEffect(() => {
        setTimeout(() => {
            const checkIn = [];
            const confirm = [];
            const pending = [];
            const cancelCheckedOut = [];
            for (let i = 0; i < data.length; i++) {
                checkIn.push(data[i]);
                confirm.push(data[i]);
                pending.push(data[i]);
                cancelCheckedOut.push(data[i]);
            }
            //Set records
            setRecords({
                checkIn: checkIn,
                confirm: confirm,
                pending: pending,
                cancelCheckedOut: cancelCheckedOut,
            });
        }, 500);
    }, []);
    //re-render after fetch
    useEffect(() => {
        RenderDataTable(0, "checkIn");
        console.log(records.checkIn.length);
        setPageOfTable(records.checkIn.length);
    }, [records]);
    //render data
    function RenderDataTable(indexStart, type) {
        const row = [];
        for (let i = indexStart; i < rowsData + indexStart; i++) {
            if (i == records[type].length) {
                break;
            }
            row.push(ConvertDataTable(records[type][i]));
        }
        setTableData(row);
    }
    // convert data from data fetched
    function ConvertDataTable(data) {
        return {
            roomNumber: data.name,
            roomType: data.room_type_id,
            roomFloor: data.floor,
            status: data.status ? "Available" : "Booked",
        };
    }
    //handle click page
    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData, selectedCategory);
    };
    const SetPageOfTable = (index) => {
        let type = "";
        if (index === 0) {
            type = "checkIn";
        } else if (index === 1) type = "confirm";
        else if (index === 2) type = "pending";
        else if (index === 3) type = "cancelCheckedOut";
        setSelectedCategory(type);
    };
    return (
        <div className="booking-container">
            <div className="booking-header">
                <div className="booking-type">
                    {buttons.map((button, index) => (
                        <TextUnderline
                            key={index}
                            textUnderline={button}
                            isFocused={focusedIndex === index}
                            onClick={() => {
                                setFocusedIndex(index);
                                SetPageOfTable(index);
                            }}
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
                <Table columns={columns} data={tableData} />
            </div>
            <div className="booking-page-navigation">
                {data.length > rowsData && (
                    <PageNavigation
                        page={Math.ceil(records.length / rowsData)}
                        onNextPage={handleClickPage}
                        onPreviousPage={handleClickPage}
                        onClickPage={handleClickPage}
                        type={selectedCategory}
                    ></PageNavigation>
                )}
            </div>
        </div>
    );
}

export default BookingManagementPage;
