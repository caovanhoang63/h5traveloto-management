import './front-desk.css';
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import FrontdeskTable from '../../components/frontdesktable/frontdesk-table';
import Button, { PrimaryButton, SecondaryButton, TransparentButton } from "../../components/button/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import ico_plus from "../../assets/icons/plus-active.png"
import ico_plus_active from "../../assets/icons/plus-active.png";
import ico_minus_active from "../../assets/icons/minus-active.png";

function FrontDesk() {
    const columns = [
        {
            Header: "No.",
            accessor: "no"
        },
        {
            Header: "Room Type",
            accessor: "roomType"
        },
        {
            Header: "Room Facility",
            accessor: "roomFacility"
        },
        {
            Header: "Available Rooms",
            accessor: "availableRooms"
        },
        {
            Header: "Price",
            accessor: "price"
        },
    ];
    const data = [
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
        {
            no: "#045",
            roomType: "Double bed",
            roomFacility: "AC, shower, double bed",
            availableRooms: 4,
            price: 200
        },
    ];
    const filterdata = [
        {
            id: 0,
            roomType: "Vip"
        },
        {
            id: 1,
            roomType: "Double"
        },
        {
            id: 2,
            roomType: "Single"
        },
        {
            id: 3,
            roomType: "Triple"
        },
    ]
    const rowsData = 6;
    const [records, setRecords] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [filter, setFilter] = useState("all");
    const today = new Date();
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1));
    const [adultNum, setAdultNum] = useState(1);
    const [childNum, setChildNum] = useState(0);

    //Fetch API
    useEffect(() => {
        // mat thoi gian fetch du lieu
        setTimeout(() => {
            setRecords(data);
            console.log("lay du lieu");
        }, 500);
    }, []);
    console.log(records);
    // re-render sau khi fetch
    useEffect(() => {
        RenderDataTable(0);
        console.log("re render du lieu");
    }, [records]);
    
    function RenderDataTable(indexStart) {
        const row = [];
        for (let i = indexStart; i < rowsData + indexStart; i++) {
            if (i >= records.length) break;
            row.push(records[i]);
        }
        setTableData(row);
    }

    const handleClickFilterBtt = (filter) => {
        setFilter(filter);
    }

    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData);
    };

    return (
        <div className="frontdesk-container">
            <div className="frontdesk-filter">
                <div className="frondesk-filter-container-button">
                    <Button 
                        className={"frontdesk-button-filter " + ((filter == "all") ? "active" : "")}
                        onClick={() => handleClickFilterBtt("all")}>
                        All room({data.length})
                    </Button>
                    {filterdata && filterdata.map && filterdata.map(filterBtt => (
                        <Button 
                            key={filterBtt.id}
                            className={"frontdesk-button-filter " + ((filter == filterBtt.roomType) ? "active" : "")}
                            onClick={() => handleClickFilterBtt(filterBtt.roomType)}>
                            {filterBtt.roomType}
                        </Button>
                    ))}
                </div>
                <div className="frontdesk-filter-container-date">
                    <div className="frontdesk-dates">
                        <div className="frontdesk-date">
                            <div>
                                Check in
                            </div>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="frontdesk-date">
                            <div>
                                Check out
                            </div>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                        </div>
                    </div>
                    <div className="frontdesk-checkbtn">
                        <PrimaryButton>
                            Check availability
                        </PrimaryButton>
                    </div>
                </div>
                <div className="frontdesk-filter-container-guestnum">
                    <div className="guestnum-label">
                        <div className="label">
                            Adult
                        </div>
                        <div className="body">
                            Older than 12 years
                        </div>
                    </div>
                    <div className="guestnum-buttons">
                        <Button className="filter-btn" icon="only" src={ico_minus_active} alt={ico_minus_active} onClick={() => setAdultNum(adultNum - 1)}/>
                        <div className="adult-num">{adultNum}</div>
                        <Button className="filter-btn" icon="only" src={ico_plus} alt={ico_plus_active} onClick={() => setAdultNum(adultNum + 1)}/>
                    </div>
                    <div className="guestnum-label">
                        <div className="label">
                            Children
                        </div>
                        <div className="body">
                            0 - 12 years
                        </div>
                    </div>
                    <div className="guestnum-buttons">
                        <Button className="filter-btn" icon="only" src={ico_minus_active} alt={ico_minus_active} onClick={() => setChildNum(childNum - 1)}/>
                        <div className="adult-num">{childNum}</div>
                        <Button className="filter-btn" icon="only" src={ico_plus} alt={ico_plus_active} onClick={() => setChildNum(childNum + 1)}/>
                    </div>
                </div>
            </div>
            <div className="frontdesk-table">
                <FrontdeskTable data={tableData} columns={columns}></FrontdeskTable>
            </div>
            <div className="frontdesk-pagenav">
                {data.length > rowsData && (
                    <PageNavigation
                        page={Math.ceil(records.length / rowsData)}
                        onNextPage={handleClickPage}
                        onPreviousPage={handleClickPage}
                        onClickPage={handleClickPage}
                    ></PageNavigation>
                )}
            </div>
        </div>
    )
}

export default FrontDesk