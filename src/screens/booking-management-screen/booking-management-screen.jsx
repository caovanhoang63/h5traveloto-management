import Button, {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import IconFilter from "../../assets/icons/icon-filter.png";
import { useEffect, useState } from "react";
import "./booking-management-screen.css"
import BookingManagementTable from "../../components/bookingmanagementtable/bookingmanagementtable";

function BookingManagementScreen () {
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
            Header: "Room Quantity",
            accessor: "roomQuantity"
        },
        {
            Header: "Start Date",
            accessor: "startDate"
        },
        {
            Header: "End Date",
            accessor: "endDate"
        },
    ]
    const data = [
        {
            no: "#045",
            roomType: "Double Bed",
            roomQuantity: 2,
            startDate: "3/2/1975",
            endDate: "4/2/1975"
        }
    ]

    const rowsData = 6;
    const [records, setRecords] = useState([]);
    const [tableData, setTableData] = useState([]);
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

    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData);
    };

    return (
        <div>
            <div className="booking-management-option">
                <PrimaryButton className={"booking-management-option__button-add"}>
                    Add booking
                </PrimaryButton>
                <TransparentButton
                    className={"booking-management-option__button-filter"}
                    border={true}
                    icon={"trailing"}
                    src={IconFilter}
                    alt=""
                >
                    Filter
                </TransparentButton>
            </div>
            <div className="booking-management-table">
                <BookingManagementTable data={tableData} columns={columns}></BookingManagementTable>
            </div>
            <div className="booking-management-page-navigation">
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

export default BookingManagementScreen