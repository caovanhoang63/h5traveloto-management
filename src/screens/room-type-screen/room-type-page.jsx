import Button, {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import IconFilter from "../../assets/icons/icon-filter.png";
import "./room-type-page.css";
import Table from "../../components/table/table";
import { useEffect, useState } from "react";

function RoomTypePage() {
    const columns = [
        {
            Header: "Room type",
            accessor: "roomType",
        },
        {
            Header: "Deals",
            accessor: "deals",
        },

        {
            Header: "Cancellation policy",
            accessor: "cancellationPolicy",
        },
        {
            Header: "Deal price",
            accessor: "dealPrice",
        },
        {
            Header: "Availability",
            accessor: "availability",
        },
    ];

    const data = [
        {
            roomType: "Single Room",
            deals: "10% off",
            cancellationPolicy: "Flexible",
            dealPrice: "$50",
            availability: "Available",
        },
        {
            roomType: "Double Room",
            deals: "20% off",
            cancellationPolicy: "Moderate",
            dealPrice: "$80",
            availability: "Available",
        },
        {
            roomType: "Suite",
            deals: "15% off",
            cancellationPolicy: "Strict",
            dealPrice: "$150",
            availability: "Inactive",
        },
        {
            roomType: "Studio Apartment",
            deals: "25% off",
            cancellationPolicy: "Super Strict",
            dealPrice: "$200",
            availability: "Available",
        },
        {
            roomType: "Penthouse",
            deals: "No deals",
            cancellationPolicy: "Moderate",
            dealPrice: "$500",
            availability: "Available",
        },
        {
            roomType: "Family Suite",
            deals: "30% off",
            cancellationPolicy: "Strict",
            dealPrice: "$250",
            availability: "Available",
        },
        {
            roomType: "Economy Room",
            deals: "15% off",
            cancellationPolicy: "Flexible",
            dealPrice: "$40",
            availability: "Available",
        },
        {
            roomType: "Luxury Suite",
            deals: "40% off",
            cancellationPolicy: "Super Strict",
            dealPrice: "$300",
            availability: "Available",
        },
        {
            roomType: "Standard Room",
            deals: "10% off",
            cancellationPolicy: "Moderate",
            dealPrice: "$60",
            availability: "Available",
        },
        {
            roomType: "Executive Suite",
            deals: "20% off",
            cancellationPolicy: "Flexible",
            dealPrice: "$200",
            availability: "Available",
        },
        {
            roomType: "Bungalow",
            deals: "No deals",
            cancellationPolicy: "Super Strict",
            dealPrice: "$400",
            availability: "Available",
        },
        {
            roomType: "Bungalow",
            deals: "No deals",
            cancellationPolicy: "Super Strict",
            dealPrice: "$400",
            availability: "Available",
        },
    ];

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
        <div className="room-type-container">
            <div className="room-type-option">
                <PrimaryButton className={"room-type-option__button-add"}>
                    Add room type
                </PrimaryButton>
                <TransparentButton
                    className={"room-type-option__button-filter"}
                    border={true}
                    icon={"trailing"}
                    src={IconFilter}
                    alt=""
                >
                    Filter
                </TransparentButton>
            </div>
            <div className="room-type-table">
                <Table data={tableData} columns={columns}></Table>
            </div>
            <div className="room-type-page-navigation">
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
    );
}

export default RoomTypePage;
