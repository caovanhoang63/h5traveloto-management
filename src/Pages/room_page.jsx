import { useState } from "react";
import Button, {
    PrimaryButton,
    TransparentButton,
} from "../components/button/button";
import Table from "../components/table/table";
import "./room-page.css";

function RoomPage() {
    const columns = [
        {
            Header: "RoomNumber",
            accessor: "roomNumber",
        },
        {
            Header: "Bed type",
            accessor: "bedType",
        },

        {
            Header: "Room floor",
            accessor: "roomFloor",
        },
        {
            Header: "Room facility",
            accessor: "roomFacility",
        },
        {
            Header: "Status",
            accessor: "status",
        },
    ];

    const data = [
        {
            roomNumber: "101",
            bedType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Clean",
        },
        {
            roomNumber: "102",
            bedType: "Double",
            roomFloor: "1",
            roomFacility: "TV",
            status: "Clean",
        },
        {
            roomNumber: "103",
            bedType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Dirty",
        },
        {
            roomNumber: "104",
            bedType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "New",
        },
        {
            roomNumber: "105",
            bedType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Reserved",
        },
        {
            roomNumber: "106",
            bedType: "Single",
            roomFloor: "1",
            roomFacility: "WiFi",
            status: "Booked",
        },
    ];
    const [selectedCategory, setSelectedCategory] = useState();

    const handleClickButtonFilter = (button) => {
        setSelectedCategory(button);
    };
    console.log(selectedCategory);

    return (
        <div className={"room-container"}>
            <div className="room-option">
                <div className="container__button-option">
                    <Button
                        className={
                            "room-option__button " +
                            (selectedCategory == 1 ? "selected-category" : "")
                        }
                        onClick={() => handleClickButtonFilter(1)}
                    >
                        <span className="room-option__button-text">
                            All Room(100)
                        </span>
                    </Button>
                    <Button
                        className={
                            "room-option__button " +
                            (selectedCategory == 2 ? "selected-category" : "")
                        }
                        onClick={() => handleClickButtonFilter(2)}
                    >
                        <span className="room-option__button-text">
                            Available(20)
                        </span>
                    </Button>
                    <Button
                        className={
                            "room-option__button " +
                            (selectedCategory == 3 ? "selected-category" : "")
                        }
                        onClick={() => handleClickButtonFilter(3)}
                    >
                        <span className="room-option__button-text">
                            Booked(100)
                        </span>
                    </Button>
                </div>
                <PrimaryButton className={"room-option__button-add"}>
                    <span className="room-option__button-add-text">
                        Add room
                    </span>
                </PrimaryButton>
            </div>
            <div className="room-content">
                <Table data={data} columns={columns}></Table>
            </div>
        </div>
    );
}

export default RoomPage;
