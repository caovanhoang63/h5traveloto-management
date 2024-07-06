import Button, {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import IconFilter from "../../assets/icons/icon-filter.png";
import DealTable from "../../components/dealtable/deal-table";
import { useEffect, useState } from "react";
import "./deal-screen.css";
import { getDealsByHotelId } from "../../api/deal-api";

function DealScreen() {
    const columns = [
        {
            Header: "No.",
            accessor: "no",
        },
        {
            Header: "Deal Name",
            accessor: "dealName",
        },

        {
            Header: "Reservations Left",
            accessor: "reservationsLeft",
        },
        {
            Header: "End Date",
            accessor: "endDate",
        },
        {
            Header: "Room Type",
            accessor: "roomType",
        },
        {
            Header: "Status",
            accessor: "status",
        },
    ];
    const data = [
        {
            no: "#5664",
            dealName: "Family Deal",
            reservationsLeft: 10,
            endDate: "21/3/2023",
            roomType: "VIP",
            status: "Ongoing",
        },
        {
            no: "#6112",
            dealName: "Christmas Deal",
            reservationsLeft: 12,
            endDate: "21/3/2023",
            roomType: "VIP",
            status: "Ongoing",
        },
        {
            no: "#6141",
            dealName: "Family Deal",
            reservationsLeft: 15,
            endDate: "",
            roomType: "Triple",
            status: "Expired",
        },
        {
            no: "#6535",
            dealName: "Black Friday",
            reservationsLeft: 10,
            endDate: "1/5/2023",
            roomType: "VIP",
            status: "Expired",
        },
    ];

    const rowsData = 5;
    const [records, setRecords] = useState([]);
    const [tableData, setTableData] = useState([]);
    //Fetch API
    useEffect(() => {
        getDealsByHotelId({ hotel_id: `"gGzTBURqhajF"` })
            .then((res) => {
                if (res.data !== null) {
                    setRecords(res.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
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
            row.push(ConvertDataTable(records[i]));
        }
        setTableData(row);
    }

    function ConvertDataTable(data) {
        return {
            no: data.id,
            dealName: data.name,
            reservationsLeft: ConvertReservationsLeft(data),
            endDate: data.expiry_date,
            roomType: data.room_type_id,
            status: ConvertStatus(data),
        };
    }

    function ConvertReservationsLeft(data) {
        if (data.is_unlimited) {
            return "Unlimited";
        }
        return data.total_quantity;
    }

    function ConvertStatus(data) {
        if (data.expiry_date < new Date()) {
            return "Expired";
        } else {
            return "Ongoing";
        }
    }

    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData);
    };

    return (
        <div className="deal-screen-container">
            <div className="deal-screen-option">
                <PrimaryButton className={"deal-screen-option__button-add"}>
                    Add deal
                </PrimaryButton>
                <TransparentButton
                    className={"deal-screen-option__button-filter"}
                    border={true}
                    icon={"trailing"}
                    src={IconFilter}
                    alt=""
                >
                    Filter
                </TransparentButton>
            </div>
            <div className="deal-screen-table">
                <DealTable data={tableData} columns={columns}></DealTable>
            </div>
            <div className="deal-screen-page-navigation">
                {records.length > rowsData && (
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

export default DealScreen;
