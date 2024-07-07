import React from "react";
import "./button-choose-room.css";
import { useState, useEffect } from "react";

function ButtonChooseRoom({ roomTypeId, roomData, onClick, canDisabled }) {
    const [selectedRoom, setSelectedRoom] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        console.log("hhhhhhhhh", roomData);
        if (
            roomTypeId !== roomData.roomTypeId ||
            (canDisabled && !selectedRoom)
        ) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [canDisabled]);

    const handleClickButton = () => {
        setSelectedRoom(!selectedRoom);
        onClick(roomData);
    };

    const isClassButtonActive = () =>
        roomTypeId === roomData.roomTypeId ? "button-active" : "";

    const isClassButtonSelected = () => (selectedRoom ? "button-selected" : "");

    return (
        <button
            onClick={() => {
                handleClickButton();
            }}
            className={`button-choose-room ${isClassButtonActive()} ${isClassButtonSelected()}`}
            disabled={isDisabled}
        >
            {roomData.roomName}
        </button>
    );
}

export default ButtonChooseRoom;
