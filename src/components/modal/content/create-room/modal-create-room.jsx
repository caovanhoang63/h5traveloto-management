import FlexTextBox from "../../../flextextbox/flextextbox";
import FlexComboBox from "../../../flexcombobox/flexcombobox";
import "./modal-create-room.css";
import { getRoomTypesByHotelId } from "../../../../api/room_type_api";
import { useEffect, useState } from "react";

function ModalCreateRoom({
    options = [],
    onChangeRoomType,
    onChangeRoomName,
    onChangeFloor,
}) {
    return (
        <div className="modal-create-room__container">
            <div className="modal-create-room__field">
                <span className="lable-input">Room Name</span>
                <FlexTextBox
                    id={"roomName"}
                    classname={"modal-create-room__input"}
                    placeHolder={"Enter Room Name"}
                    onChange={onChangeRoomName}
                />
            </div>
            <div className="modal-create-room__field">
                <span className="lable-input">Room Type</span>
                <FlexComboBox
                    id={"roomType"}
                    classname={"modal-create-room__input"}
                    placeholderText={"Select Room Type"}
                    options={options}
                    onChange={onChangeRoomType}
                />
            </div>
            <div className="modal-create-room__field">
                <span className="lable-input">Floor</span>
                <FlexTextBox
                    id={"floor"}
                    classname={"modal-create-room__input"}
                    placeHolder={"Enter Floor"}
                    onChange={onChangeFloor}
                />
            </div>
        </div>
    );
}

export default ModalCreateRoom;
