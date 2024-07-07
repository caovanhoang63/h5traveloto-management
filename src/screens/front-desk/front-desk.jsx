import "./front-desk.css";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import FrontdeskTable from "../../components/frontdesktable/frontdesk-table";
import Button, {
    PrimaryButton,
    SecondaryButton,
    TransparentButton,
} from "../../components/button/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import ico_plus from "../../assets/icons/plus-active.png";
import ico_plus_active from "../../assets/icons/plus-active.png";
import ico_minus_active from "../../assets/icons/minus-active.png";
import { searchRoomTypes } from "../../api/check_availability";
import DealTable from "../../components/dealtable/deal-table";
import Modal from "../../components/modal/modal";
import ModalChooseRoom from "../../components/modal/content/choose-room/modal-choose-room";
import ModalInfoCustomer from "../../components/modal/content/info-customer/modal-info-customer";
import { createBooking } from "../../api/booking_management_api";

function FrontDesk() {
    const columns = [
        {
            Header: "Room Type",
            accessor: "roomType",
        },
        {
            Header: "Max Customer",
            accessor: "maxCustomer",
        },
        {
            Header: "Available Rooms",
            accessor: "availableRooms",
        },
        {
            Header: "Price",
            accessor: "price",
        },
        {
            Header: "Status",
            accessor: "status",
        },
    ];

    const rowsData = 5;
    const [records, setRecords] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [filter, setFilter] = useState("all");
    const today = new Date();
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
    );
    const [adultNum, setAdultNum] = useState(1);
    const [childNum, setChildNum] = useState(0);
    const [roomNum, setRoomNum] = useState(1);

    // Start Logic Input
    const checkAvailability = () => {
        searchRoomTypes({
            adults: adultNum,
            children: childNum,
            room_quantity: roomNum,
            start_date: startDate,
            end_date: endDate,
            hotel_id: "gGzTBURqhajG",
        })
            .then((res) => {
                if (res.data !== null) {
                    setRecords(res.data);
                } else {
                    setRecords([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const increaseAdult = () => {
        if (adultNum < 20) {
            setAdultNum(adultNum + 1);
        }
    };
    const decreaseAdult = () => {
        if (adultNum > 1) {
            setAdultNum(adultNum - 1);
        }
    };

    const increaseChild = () => {
        if (childNum < 20) {
            setChildNum(childNum + 1);
        }
    };
    const decreaseChild = () => {
        if (childNum > 0) {
            setChildNum(childNum - 1);
        }
    };

    const increaseRoom = () => {
        if (roomNum < 20) {
            setRoomNum(roomNum + 1);
        }
    };
    const decreaseRoom = () => {
        if (roomNum > 1) {
            setRoomNum(roomNum - 1);
        }
    };

    // End Logic Input

    //Fetch API
    useEffect(() => {
        searchRoomTypes({
            adults: adultNum,
            children: childNum,
            room_quantity: roomNum,
            start_date: startDate,
            end_date: endDate,
            hotel_id: "gGzTBURqhajG",
        })
            .then((res) => {
                if (res.data !== null) {
                    setRecords(res.data);
                } else {
                    setRecords([]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
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
            ...data,
            roomType: data.name,
            maxCustomer: data.max_customer,
            availableRooms: data.available_room,
            price: data.price,
            status: data.status ? "Available" : "Booked",
        };
    }

    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData);
    };

    const [isOpenModalInfo, setIsOpenModalInfo] = useState(false);
    const [isOpenModalChooseRoom, setIsOpenModalChooseRoom] = useState(false);
    const [bookingData, setBookingData] = useState({});
    const [dataRoomTypeSelected, setDataRoomTypeSelected] = useState({});
    const [nameUser, setNameUser] = useState("");
    const [phoneUser, setPhoneUser] = useState("");
    const [genderUser, setGenderUser] = useState("");

    const handleClickRow = (dataRow) => {
        setIsOpenModalInfo(true);
        setDataRoomTypeSelected(dataRow);
    };

    const handleConfirmCreateBooking = (data) => {
        // call api create booking
        setIsOpenModalInfo(false);
        console.log(nameUser, phoneUser, genderUser, dataRoomTypeSelected);
        createBooking({
            booking: {
                hotel_id: sessionStorage.getItem("hotel-id"),
                room_type_id: dataRoomTypeSelected.id,
                room_quantity: roomNum,
                adults: adultNum,
                children: childNum,
                start_date: convertDate(startDate),
                end_date: convertDate(endDate),
            },
            customer: {
                name: nameUser,
                address: phoneUser,
                gender: genderUser,
            },
        });
    };
    const handleChangeName = (value) => {
        setNameUser(value);
    };
    const handleChangePhone = (value) => {
        setPhoneUser(value);
    };
    const handleChangeGender = (value) => {
        setGenderUser(value);
    };
    const convertDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, "0");
        const day = d.getDate().toString().padStart(2, "0");
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="frontdesk-container">
            <div className="frontdesk-filter">
                <div className="frontdesk-filter-container-date">
                    <div className="frontdesk-dates">
                        <div className="frontdesk-date">
                            <div>Check in</div>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                        <div className="frontdesk-date">
                            <div>Check out</div>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                        </div>
                    </div>
                    <div className="frontdesk-checkbtn">
                        <PrimaryButton onClick={() => checkAvailability()}>
                            Check availability
                        </PrimaryButton>
                    </div>
                </div>
                <div className="frontdesk-filter-container-guestnum">
                    <div className="guestnum-label">
                        <div className="label">Adult</div>
                        <div className="body">Older than 12 years</div>
                    </div>
                    <div className="guestnum-buttons">
                        <Button
                            className="filter-btn"
                            icon="only"
                            src={ico_minus_active}
                            alt={ico_minus_active}
                            onClick={() => decreaseAdult()}
                        />
                        <div className="adult-num">{adultNum}</div>
                        <Button
                            className="filter-btn"
                            icon="only"
                            src={ico_plus}
                            alt={ico_plus_active}
                            onClick={() => increaseAdult()}
                        />
                    </div>
                    <div className="guestnum-label">
                        <div className="label">Children</div>
                        <div className="body">0 - 12 years</div>
                    </div>
                    <div className="guestnum-buttons">
                        <Button
                            className="filter-btn"
                            icon="only"
                            src={ico_minus_active}
                            alt={ico_minus_active}
                            onClick={() => decreaseChild()}
                        />
                        <div className="adult-num">{childNum}</div>
                        <Button
                            className="filter-btn"
                            icon="only"
                            src={ico_plus}
                            alt={ico_plus_active}
                            onClick={() => increaseChild()}
                        />
                    </div>
                    <div className="guestnum-label">
                        <div className="label">Room Quantity</div>
                    </div>
                    <div className="guestnum-buttons">
                        <Button
                            className="filter-btn"
                            icon="only"
                            src={ico_minus_active}
                            alt={ico_minus_active}
                            onClick={() => decreaseRoom()}
                        />
                        <div className="adult-num">{roomNum}</div>
                        <Button
                            className="filter-btn"
                            icon="only"
                            src={ico_plus}
                            alt={ico_plus_active}
                            onClick={() => increaseRoom()}
                        />
                    </div>
                </div>
            </div>
            <div className="frontdesk-table">
                <DealTable
                    data={tableData}
                    columns={columns}
                    getData={handleClickRow}
                ></DealTable>
                {isOpenModalInfo && (
                    <Modal
                        title="Create Booking"
                        onClose={() => setIsOpenModalInfo(false)}
                        onConfirm={() => handleConfirmCreateBooking()}
                        content={
                            <ModalInfoCustomer
                                onChangeName={handleChangeName}
                                onChangePhone={handleChangePhone}
                                onChangeGender={handleChangeGender}
                            ></ModalInfoCustomer>
                        }
                    ></Modal>
                )}
            </div>
            <div className="frontdesk-pagenav">
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

export default FrontDesk;
