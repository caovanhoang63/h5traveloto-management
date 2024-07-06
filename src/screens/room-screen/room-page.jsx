import { useEffect, useState } from "react";
import Button, { PrimaryButton } from "../../components/button/button";
import "./room-page.css";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import { getRoomByHotelId } from "../../api/room_api";
import DealTable from "../../components/dealtable/deal-table";
import Toast from "../../components/modal/toast";
import ModalStatus from "../../components/modal/modal-status";
import ModalCustom from "../../components/modal/modal-custom";
import { type } from "@testing-library/user-event/dist/type";
import { is } from "date-fns/locale";
import ModalCreateRoom from "../../components/modal/content/modal-create-room";
import { set } from "date-fns";

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

function RoomPage() {
    const [isOpenModalCreateRoom, setIsOpenModalCreateRoom] = useState(false);
    const rowsData = 5; //So dong du lieu
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [pageOfTable, setPageOfTable] = useState();
    const [tableData, setTableData] = useState([]);
    const [records, setRecords] = useState({
        all: [],
        available: [],
        booked: [],
    });
    let params = {
        limit: 8,
        page: 1,
    };

    //Fetch API
    useEffect(() => {
        getRoomByHotelId({})
            .then((res) => {
                const data = res;
                console.log(data.data);
                const length = data.data.length;
                const allData = [];
                const availableData = [];
                const bookedData = [];
                if (res.data !== null) {
                    for (let i = 0; i < length; i++) {
                        if (data.data[i].status == 1) {
                            availableData.push(data.data[i]);
                        } else if (data.data[i].status == 2) {
                            bookedData.push(data.data[i]);
                        }
                        allData.push(data.data[i]);
                    }
                    setRecords({
                        all: allData,
                        available: availableData,
                        booked: bookedData,
                    });
                }
            })
            .catch((e) => console.log(e));
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
            row.push(ConvertDataTable(records[type][i]));
        }
        setTableData(row);
    }
    function ConvertDataTable(data) {
        return {
            roomNumber: data.name,
            roomType: data.room_type.name,
            roomFloor: data.floor,
            status: data.status ? "Available" : "Booked",
        };
    }

    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData, selectedCategory);
    };

    const handleOnClickAddRoom = () => {
        // Toast({
        //     title: "Add room",
        //     type: "success",
        // });
        // ModalStatus({
        //     title: "Add room",
        //     type: "success",
        //     message: "Add room success",
        // });
        setIsOpenModalCreateRoom(true);
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
                <PrimaryButton
                    className={"room-option__button-add"}
                    onClick={() => handleOnClickAddRoom()}
                >
                    Add room
                </PrimaryButton>
                {isOpenModalCreateRoom && (
                    <ModalCustom
                        content={<ModalCreateRoom></ModalCreateRoom>}
                        onConfirm={() => setIsOpenModalCreateRoom(false)}
                        onClose={() => setIsOpenModalCreateRoom(false)}
                    ></ModalCustom>
                )}
            </div>
            <div className="room-content">
                <DealTable data={tableData} columns={columns}></DealTable>
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
