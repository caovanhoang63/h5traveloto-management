import Button, {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import IconFilter from "../../assets/icons/icon-filter.png";
import "./guest-screen.css";
import Table from "../../components/table/table";
import { useEffect, useState } from "react";

function GuestScreen() {
    const columns = [
        {
            Header: "Reservation ID",
            accessor: "reservation_id",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Total amount",
            accessor: "total_amount",
        },
        {
            Header: "Last booking",
            accessor: "last_booking",
        }
    ];

    const data = [
        {
            reservation_id: "001",
            name: "John Doe",
            total_amount: 200,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "002",
            name: "Jane Smith",
            total_amount: 250,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "003",
            name: "Alice Johnson",
            total_amount: 300,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "004",
            name: "Bob Brown",
            total_amount: 400,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "005",
            name: "Charlie Davis",
            total_amount: 150,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "006",
            name: "David Green",
            total_amount: 220,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "007",
            name: "Eva White",
            total_amount: 180,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "008",
            name: "Frank Black",
            total_amount: 320,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "009",
            name: "Grace Pink",
            total_amount: 270,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "010",
            name: "Henry Orange",
            total_amount: 190,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "011",
            name: "Isabel Gray",
            total_amount: 300,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "012",
            name: "Jack Blue",
            total_amount: 280,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "013",
            name: "Kathy Yellow",
            total_amount: 350,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "014",
            name: "Leo Brown",
            total_amount: 240,
            last_booking: "31/05/2004"
        },
        {
            reservation_id: "015",
            name: "Maria Black",
            total_amount: 400,
            last_booking: "31/05/2004"
        }
    ];

    const rowsData = 6;
    const [records, setRecords] = useState([]);
    const [tableData, setTableData] = useState([]);

    let params = {
        limit: 8,
        page: 1,
    };
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
    const [selectedCategory, setSelectedCategory] = useState("checkin");
    const [pageOfTable, setPageOfTable] = useState();

    const handleClickButtonFilter = (type) => {
        setSelectedCategory(type);
//        RenderDataTable(0, type);
//        setPageOfTable(records[type].length);
    };
    return (
        <div className="guest-container">
            <div className="guest-option">
                <TransparentButton
                    className={"guest-option__button-filter"}
                    border={true}
                    icon={"trailing"}
                    src={IconFilter}
                    alt=""
                >
                    Filter
                </TransparentButton>
            </div>
            <div className="guest-table">
                <Table data={tableData} columns={columns}></Table>
            </div>
            <div className="guest-page-navigation">
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

export default GuestScreen;
