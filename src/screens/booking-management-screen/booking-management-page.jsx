import React, { useState, useEffect } from "react";
import {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import "./booking-management-page.css";
import IconFilter from "../../assets/icons/icon-filter.png";
import TextUnderline from "../../components/textunderline/texunderline";
import { Link } from "react-router-dom";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import DealTable from "../../components/dealtable/deal-table";
import { getBookingByHotelId } from "../../api/booking_management_api";
import { all } from "axios";
import { set } from "date-fns";

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
            accessor: "roomQuantity",
        },
        {
            Header: "Start Date",
            accessor: "startDate",
        },
        {
            Header: "End Date",
            accessor: "endDate",
        },
        {
            Header: "Status",
            accessor: "status",
        },
    ];

    const [focusedIndex, setFocusedIndex] = useState(0);
    const buttons = [
        "All-Booking",
        "Check-In",
        "Confirmed",
        "Pending",
        "Checked-Out",
    ];

    const rowsData = 5;
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [pageOfTable, setPageOfTable] = useState();
    const [tableData, setTableData] = useState([]);
    const [records, setRecords] = useState({
        all: [],
        checkIn: [],
        confirm: [],
        pending: [],
        cancelCheckedOut: [],
    });
    //Fetch data
    useEffect(() => {
        getBookingByHotelId("gGzTBURqhajF")
            .then((response) => {
                const all = [];
                const checkIn = [];
                const confirm = [];
                const pending = [];
                const cancelCheckedOut = [];
                if (response.data !== null) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].state == "checked-in") {
                            checkIn.push(response.data[i]);
                        } else if (response.data[i].state == "paid") {
                            confirm.push(response.data[i]);
                        } else if (response.data[i].state == "pending") {
                            pending.push(response.data[i]);
                        } else if (response.data[i].state == "checked-out") {
                            cancelCheckedOut.push(response.data[i]);
                        }
                        all.push(response.data[i]);
                    }
                    setRecords({
                        all: all,
                        checkIn: checkIn,
                        confirm: confirm,
                        pending: pending,
                        cancelCheckedOut: cancelCheckedOut,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    //re-render after fetch
    useEffect(() => {
        RenderDataTable(0, "all");
        setPageOfTable(records.all.length);
    }, [records]);

    //handle click button All, Check-In, Confirmed, Pending, Checked-Out
    const handleClickButtonFilter = (type) => {
        setSelectedCategory(ConvertType(type));
        RenderDataTable(0, ConvertType(type));
        setPageOfTable(records[ConvertType(type)].length);
    };
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
            no: data.id,
            roomType: data.room_type_id,
            roomQuantity: data.room_quantity,
            startDate: data.start_date,
            endDate: data.end_date,
            status: ConvertStatus(data.state),
        };
    }
    function ConvertStatus(status) {
        if (status === "checked-in") return "Check-In";
        else if (status === "paid") return "Paid";
        else if (status === "pending") return "Pending";
        else if (status === "checked-out") return "Checked-Out";
        else if (status === "expired") return "Expired";
    }
    //handle click page
    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData, selectedCategory);
    };
    //convert type
    const ConvertType = (index) => {
        let type = "";
        if (index === 0) type = "all";
        else if (index === 1) type = "checkIn";
        else if (index === 2) type = "confirm";
        else if (index === 3) type = "pending";
        else if (index === 4) type = "cancelCheckedOut";
        return type;
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
                                setPageOfTable(
                                    records[ConvertType(index)].length
                                );
                                setSelectedCategory(ConvertType(index));
                                handleClickButtonFilter(index);
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
                <DealTable columns={columns} data={tableData} />
            </div>
            <div className="booking-page-navigation">
                {pageOfTable > rowsData && (
                    <PageNavigation
                        page={Math.ceil(pageOfTable / rowsData)}
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
