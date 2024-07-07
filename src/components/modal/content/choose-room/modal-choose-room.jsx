import React from "react";
import "./modal-choose-room.css";
import RoomGrid from "../../../roomgrid/room-grid";
import { useState, useEffect } from "react";
import { getRoomByHotelId } from "../../../../api/room_api";
import { set } from "date-fns";
import { se } from "date-fns/locale";

function ModalChooseRoom({ roomTypeId, roomQuantity, getRoomSelected }) {
    const [rooms, setRooms] = useState([]);
    const [roomSelected, setRoomSelected] = useState([]);
    const [canDisabled, setCanDisabled] = useState(false);

    useEffect(() => {
        getRoomByHotelId(
            { "hotel-id": `"${sessionStorage.getItem("hotel-id")}"` },
            sessionStorage.getItem("hotel-id")
        )
            .then((res) => {
                if (res.data !== null) {
                    console.log(res.data);
                    const roomData = [];
                    for (let i = 0; i < res.data.length; i++) {
                        roomData.push(ConvertData(res.data[i]));
                    }
                    console.log(roomData);
                    setRooms(roomData);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function ConvertData(data) {
        return {
            roomId: data.id,
            roomName: data.name,
            roomTypeId: data.room_type.id,
            status: data.status,
            selected: false,
        };
    }

    const handleChooseRoom = (room) => {
        const roomChoose = [];
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].roomId === room.roomId) {
                rooms[i].selected = !rooms[i].selected;
            }
            if (rooms[i].selected) {
                roomChoose.push(rooms[i]);
            }
        }
        setRoomSelected(roomChoose);
        getRoomSelected(roomChoose);
        if (roomChoose.length >= roomQuantity) {
            console.log("Can not choose more than 6 rooms");
            setCanDisabled(true);
        } else {
            console.log("Can choose more room");
            setCanDisabled(false);
        }
    };

    return (
        <div className="modal-choose-room__container">
            <span className="modal-choose-room__title">
                {`Room Selected: ${roomSelected.length}/${roomQuantity}`}
            </span>
            <RoomGrid
                roomTypeId={roomTypeId}
                rooms={rooms}
                onChooseRoom={handleChooseRoom}
                canDisabled={canDisabled}
            />
        </div>
    );
}

export default ModalChooseRoom;
