import "./PendingBookingBlock.css"
import Divider from "../../../../components/divider/divider";

export function PendingBookingBlock({roomTypeName, quantity, startDate, endDate, onClick}) {
    return (
        <div className="pendingbookingblock-container" onClick={onClick}>
            <span className="pendingbookingblock-upper">{roomTypeName +" - "+ quantity}</span>
            <span className="pendingbookingblock-down">{startDate+" -> " + endDate}</span>
            <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
        </div>
    )
}