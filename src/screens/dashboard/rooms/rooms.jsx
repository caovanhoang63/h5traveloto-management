import {Fragment} from "react";
import Roomtag from "./roomtag/roomtag";
import "./rooms.css";

function Rooms({data}) {
    const style = {
        padding: "2px 8px 2px 8px",
        justifyContent: "center",
        textAlign: "center",
        height: "22px",
        width: "fit-content",
        borderRadius: "8px",
        fontWeight: "bold",
        fontsize: "1.2em",
    }
    return (

        <div className="rooms-container">
            <h1 className="rooms-header">Rooms</h1>
            <div className="rooms-content">
                {data.data.map((room) => (
                    <Roomtag
                        key={room.id}
                        style={style}
                        maxnumberofrooms={room.total_room}
                        numberofdeals={room.max_customer}
                        numberofrooms={room.cur_available_room}
                        price={room.price}
                        name={room.name}
                    />
                ))}
            </div>
        </div>
    )
}

/*
maxnumberofrooms={total_room} numberofdeals={max_customer} numberofrooms={cur_available_room} price={price} name={name}
*/
export default Rooms;