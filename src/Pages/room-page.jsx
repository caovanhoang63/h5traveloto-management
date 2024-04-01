import { useEffect, useState } from "react";
import Button, { PrimaryButton } from "../components/button/button";
import Table from "../components/table/table";
import "./room-page.css";
import PageNavigation from "../components/pagenavigation/pagenavigation";

function RoomPage() {
    const columns = [
        {
            Header: "RoomNumber",
            accessor: "roomNumber",
        },
        {
            Header: "Room type",
            accessor: "roomType",
        },

        {
            Header: "Room floor",
            accessor: "roomFloor",
        },

        {
            Header: "Status",
            accessor: "status",
        },
    ];

    const data = [
        {
            roomNumber: "101",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Available",
        },
        {
            roomNumber: "102",
            roomType: "Double",
            roomFloor: "1",
            roomFacility: "TV",
            status: "Booked",
        },
        {
            roomNumber: "103",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Available",
        },
        {
            roomNumber: "104",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Booked",
        },
        {
            roomNumber: "105",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Available",
        },
        {
            roomNumber: "106",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Available",
        },
        {
            roomNumber: "107",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Booked",
        },
        {
            roomNumber: "108",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Available",
        },
        {
            roomNumber: "109",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Booked",
        },
        {
            roomNumber: "110",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Booked",
        },
        {
            roomNumber: "111",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Available",
        },
        {
            roomNumber: "112",
            roomType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Available",
        },
    ];

    const rowsData = 6; //So dong du lieu
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [pageOfTable, setPageOfTable] = useState();
    const [tableData, setTableData] = useState([]);
    const [records, setRecords] = useState({
        all: [],
        available: [],
        booked: [],
    });
    //Fetch API
    useEffect(() => {
        setTimeout(() => {
            // data la du lieu tra ve
            const length = data.length;
            const allData = [];
            const availableData = [];
            const bookedData = [];
            for (let i = 0; i < length; i++) {
                if (data[i].status == "Available") {
                    availableData.push(data[i]);
                } else if (data[i].status == "Booked") {
                    bookedData.push(data[i]);
                }
                allData.push(data[i]);
            }
            setRecords({
                all: allData,
                available: availableData,
                booked: bookedData,
            });
        }, 500);
    }, []);
    // Xu ly sau khi lay du lieu tu API
    useEffect(() => {
        RenderDataTable(0, "all");
        setPageOfTable(records.all.length);
    }, [records]);

    // handle click button All, Available, Booked
    const handleClickButtonFilter = (type) => {
        setSelectedCategory(type);
        RenderDataTable(0, type);
        setPageOfTable(records[type].length);
    };

    function RenderDataTable(indexStart, type) {
        const row = [];
        for (let i = indexStart; i < rowsData + indexStart; i++) {
            if (i == records[type].length) {
                break;
            }
            row.push(records[type][i]);
        }
        setTableData(row);
    }

    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData, selectedCategory);
    };

    return (
        <div className={"room-container"}>
            <div className="room-option">
                <div className="container__button-option">
                    <Button
                        className={
                            "room-option__button " +
                            (selectedCategory == "all"
                                ? "selected-category"
                                : "")
                        }
                        onClick={() => handleClickButtonFilter("all")}
                    >
                        All room({records.all.length})
                    </Button>
                    <Button
                        className={
                            "room-option__button " +
                            (selectedCategory == "available"
                                ? "selected-category"
                                : "")
                        }
                        onClick={() => handleClickButtonFilter("available")}
                    >
                        Available({records.available.length})
                    </Button>
                    <Button
                        className={
                            "room-option__button " +
                            (selectedCategory == "booked"
                                ? "selected-category"
                                : "")
                        }
                        onClick={() => handleClickButtonFilter("booked")}
                    >
                        Booked({records.booked.length})
                    </Button>
                </div>
                <PrimaryButton className={"room-option__button-add"}>
                    Add room
                </PrimaryButton>
            </div>
            <div className="room-content">
                <Table data={tableData} columns={columns}></Table>
            </div>
            <div className="room-page-navigation">
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

export default RoomPage;
