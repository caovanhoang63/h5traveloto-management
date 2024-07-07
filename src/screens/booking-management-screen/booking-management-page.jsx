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
import {
    getBookingByHotelId,
    checkInBooking,
    checkOutBooking,
    chooseRoomBooking,
} from "../../api/booking_management_api";
import Modal from "../../components/modal/modal";
import DataDetailBooking from "../../components/datadetail/bookingmanagement/data-detail-booking";
import ModalChooseRoom from "../../components/modal/content/choose-room/modal-choose-room";
import { set } from "date-fns";

function BookingManagementPage() {
    const columns = [
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

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalChooseRoom, setIsOpenModalChooseRoom] = useState(false);
    const [dataDetail, setDataDetail] = useState({});
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
    const [roomSelected, setRoomSelected] = useState([]);
    const [records, setRecords] = useState({
        all: [],
        checkIn: [],
        confirm: [],
        pending: [],
        cancelCheckedOut: [],
    });
    //Fetch data
    useEffect(() => {
        getBookingByHotelId(sessionStorage.getItem("hotel-id"))
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
                            if (
                                response.data[i].rooms !== null &&
                                response.data[i].rooms.length > 0
                            )
                                confirm.push(response.data[i]);
                            else pending.push(response.data[i]);
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
            ...data,
            no: data.id,
            roomType: data.room_type.name,
            roomQuantity: data.room_quantity,
            startDate: data.start_date,
            endDate: data.end_date,
            status: ConvertStatus(data),
        };
    }
    function ConvertStatus(data) {
        //Check-In CheckOut
        if (data.state === "checked-in") return "Check-In";
        if (data.state === "checked-out") return "Checked-Out";
        //Confirmed
        if (data.rooms !== null && data.rooms.length > 0) {
            if (data.state === "expired") return "Expired";
            else return "Confirmed";
        }
        //pay in hotel
        if (data.pay_in_hotel == true) {
            return "Pay-In-Hotel";
        }
        //other
        if (data.state === "paid") return "Paid";
        if (data.state === "pending") return "Pending";
        if (data.state === "canceled") return "Canceled";
        return "Expired";
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

    const handleClickRow = (dataRow) => {
        console.log(dataRow);
        setIsOpenModal(true);
        setDataDetail(dataRow);
    };

    //Choose room, Check-In, Check-Out
    const handleClickChooseRoom = () => {
        setIsOpenModal(false);
        setIsOpenModalChooseRoom(true);
    };
    const handleClickCheckIn = () => {
        checkInBooking({
            hotelId: sessionStorage.getItem("hotel-id"),
            bookingId: dataDetail.id,
        });
        setIsOpenModal(false);
    };
    const handleClickCheckOut = () => {
        checkOutBooking({
            hotelId: sessionStorage.getItem("hotel-id"),
            bookingId: dataDetail.id,
        });
        setIsOpenModal(false);
    };
    //Get list Room selected
    const handleGetRoomSelected = (roomSelected) => {
        setRoomSelected(roomSelected);
    };
    //Call API sau khi chon phong
    const handleChooseRoom = () => {
        const roomIds = [];
        for (let i = 0; i < roomSelected.length; i++) {
            roomIds.push(roomSelected[i].roomId);
        }
        chooseRoomBooking({
            hotelId: sessionStorage.getItem("hotel-id"),
            bookingId: dataDetail.id,
            body: { room_ids: roomIds },
        }).then((response) => {
            console.log(response);
        });
        setIsOpenModalChooseRoom(false);
    };
    //get room quantity of booking
    const getRoomQuantity = () => {
        if (dataDetail.room_quantity == null) return 0;
        return dataDetail.room_quantity;
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
                <DealTable
                    columns={columns}
                    data={tableData}
                    getData={handleClickRow}
                />
                {isOpenModal && (
                    <Modal
                        title={"Booking Detail"}
                        content={
                            <DataDetailBooking
                                data={dataDetail}
                                chooseRoom={handleClickChooseRoom}
                                checkIn={handleClickCheckIn}
                                checkOut={handleClickCheckOut}
                            ></DataDetailBooking>
                        }
                        onConfirm={() => {}}
                        onClose={() => setIsOpenModal(false)}
                        showButton={false}
                    ></Modal>
                )}
                {isOpenModalChooseRoom && (
                    <Modal
                        title="Create Deal"
                        content={
                            <ModalChooseRoom
                                roomQuantity={getRoomQuantity()}
                                getRoomSelected={handleGetRoomSelected}
                            />
                        }
                        onClose={() => setIsOpenModalChooseRoom(false)}
                        onConfirm={() => handleChooseRoom()}
                    ></Modal>
                )}
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
