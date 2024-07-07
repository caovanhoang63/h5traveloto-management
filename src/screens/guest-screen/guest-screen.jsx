import Button, {
    PrimaryButton,
    TransparentButton,
} from "../../components/button/button";
import PageNavigation from "../../components/pagenavigation/pagenavigation";
import IconFilter from "../../assets/icons/icon-filter.png";
import "./guest-screen.css";
import Table from "../../components/table/table";
import { useEffect, useState } from "react";
import {getWorker} from "../../api/worker_api";
import {format} from "date-fns";
import Modal from "../../components/modal/modal";
import ModalAddEmployee from "../../components/modal/content/info-customer/modal-info-customer";

function GuestScreen() {
    const columns = [
        {
            Header: "Reservation ID",
            accessor: "id",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Role",
            accessor: "role",
        },
        {
            Header: "Phone Number",
            accessor: "phone",
        },
        {
            Header: "Start date",
            accessor: "created_at",
        }
    ];



    const rowsData = 6;
    const [records, setRecords] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [data,setData] = useState([]);
    const GetWorker = ()=>{
        getWorker().then((res) => {
            const data = res.data;
            setData(data)
            setRecords(data)
        });
    }
    let params = {
        limit: 8,
        page: 1,
    };
    //Fetch API
    useEffect(() => {
        // mat thoi gian fetch du lieu
        GetWorker();
        setTimeout(() => {
            //setRecords(data);
            console.log("lay du lieu");
        }, 500);
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
            id: data.id,
            name: data.first_name + " "+ data.last_name,
            phone:data.phone?data.phone:"",
            role: data.role,
            created_at: format(data.created_at,"dd-MM-yyyy")
        };
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
    const [isOpenModal,setIsOpenModal] = useState(false);
    return (
        <div className="guest-container">
            <div className="guest-option">
                {/*<PrimaryButton
                    className={"deal-screen-option__button-add"}
                    onClick={() => setIsOpenModal(true)}
                >
                    Add employee
                </PrimaryButton>*/}
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
            {isOpenModal && (
                <Modal
                    title="Add Employee"
                    content={<ModalAddEmployee
                    />}
                    onClose={() => setIsOpenModal(false)}
                    onConfirm={()=>{}}
                    buttonSaveText="Create"
                ></Modal>
            )}
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
