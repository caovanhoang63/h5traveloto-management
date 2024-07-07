import React from "react";
import "./room-grid.css";
import ButtonChooseRoom from "../../components/roomgrid/button-choose-room";

const RoomGrid = ({ rooms, onChooseRoom, canDisabled }) => {
    const totalRooms = rooms.length;
    const columns = Math.ceil(Math.sqrt(totalRooms));
    const rows = Math.ceil(totalRooms / columns);

    return (
        <div
            className="room-grid"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
            {rooms.map((room, index) => (
                <ButtonChooseRoom
                    key={index}
                    roomTypeId={"3mKb6KK5SNSVBf"}
                    roomData={room}
                    onClick={onChooseRoom}
                    canDisabled={canDisabled}
                />
            ))}
        </div>
    );
};

export default RoomGrid;
