import Button, {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import IconFilter from "../../assets/icons/icon-filter.png";
import DealTable from "../../components/dealtable/deal-table";
import { useEffect, useState } from "react";
import "./deal-screen.css";
import {createDeal, getDealsByHotelId} from "../../api/deal-api";
import Modal from "../../components/modal/modal";
import ModalCreateDeal from "../../components/modal/content/create-deal/modal-create-deal";
import ModalInfoCustomer from "../../components/modal/content/info-customer/modal-info-customer";
import ModalChangeInfo from "../../components/modal/content/change-info/modal-change-info";
import ModalChooseRoom from "../../components/modal/content/choose-room/modal-choose-room";
import { is } from "date-fns/locale";
import {changeProfile} from "../../api/profile_api";
import Toast from "../../components/modal/toast";
import {getRoomTypesByHotelId} from "../../api/room_type_api";

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

    const rowsData = 5;
    const [records, setRecords] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [dealName, setDealName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [roomType, setRoomType] = useState("");
    const [discount, setDiscount] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    //Fetch API
    useEffect(() => {
        getRoomTypes();
        const hotelId = sessionStorage.getItem("hotel-id");
        getDealsByHotelId({ hotel_id: `"${hotelId}"` })
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
            roomType: data.room_type.name,
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

    const handleOnChangeDealName = (value) => {
        setDealName(value);
    };
    const handleOnChangeDescription = (value) => {
        setDescription(value);
    };
    const handleOnChangeQuantity = (value) => {
        setQuantity(value);
    };
    const handleOnChangeStartDate = (value) => {
        setStartDate(value);
    }
    const handleOnChangeEndDate = (value) => {
        setEndDate(value);
    }
    const handleOnChangeRoomType = (value) => {
        setRoomType(value);
    };
    const handleOnChangeDiscount = (value) => {
        setDiscount(value);
    }
    const handleClickPage = (page) => {
        RenderDataTable((page - 1) * rowsData);
    };

    const handleClickCreate=()=>{
        setIsOpenModal(false);
        createDeal({
            hotel_id: sessionStorage.getItem("hotel-id"),
            room_type_id:roomType,
            name: dealName,
            description: description,
            total_quantity: parseInt(quantity,10),
            start_date: startDate,
            expiry_date: endDate,
            discount_amount:parseInt(discount,10),
            discount_type:"percent",
            is_unlimited:true,
        })
            .then((res) => {
                Toast({ title: "Create deal success", type: "success" });
                const hotelId = sessionStorage.getItem("hotel-id");
                getDealsByHotelId({ hotel_id: `"${hotelId}"` })
                    .then((res) => {
                        if (res.data !== null) {
                            setRecords(res.data);
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((e) => {
                Toast({ title: "Create deal fail", type: "error" });
            });
    };

    const [options, setOptions] = useState([]);

    const getRoomTypes = () => {
        getRoomTypesByHotelId({
            hotel_id:`"${sessionStorage.getItem("hotel-id")}"`
        }).then((res) => {
            const data = res.data;
            const length = data.length;
            const options = [];
            for (let i = 0; i < length; i++) {
                options.push({ value: data[i].name, key: data[i].id });
            }
            console.log(options);
            setOptions(options);
        });
    };
    return (
        <div className="deal-screen-container">
            <div className="deal-screen-option">
                <PrimaryButton
                    className={"deal-screen-option__button-add"}
                    onClick={() => setIsOpenModal(true)}
                >
                    Add deal
                </PrimaryButton>
                {isOpenModal && (
                    <Modal
                        title="Create Deal"
                        content={<ModalCreateDeal
                            onChangeDealName={handleOnChangeDealName}
                            onChangeDescription={handleOnChangeDescription}
                            onChangeQuantity={handleOnChangeQuantity}
                            onChangeDiscount={handleOnChangeDiscount}
                            onChangeStartDate={handleOnChangeStartDate}
                            onChangeEndDate={handleOnChangeEndDate}
                            onChangeRoomType={handleOnChangeRoomType}
                            options={options}
                        />}
                        onClose={() => setIsOpenModal(false)}
                        onConfirm={()=>handleClickCreate()}
                        buttonSaveText="Create"
                    ></Modal>
                )}
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
