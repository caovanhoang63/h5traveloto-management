import "./roomstatuslabel.css"
function RoomstatusLabelLeft({availableAmount,dirtyAmount}){
    return(
        <div className="roomstatuslabel-container">
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-label">Available</span>
                <span className="roomstatuslabel-amount">{availableAmount ? availableAmount : 0 }</span>
            </div>
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-label">Dirty</span>
                <span className="roomstatuslabel-amount">{dirtyAmount ? dirtyAmount  : 0}</span>
            </div>
        </div>
    )
}
export function RoomstatusLabelRight({bookedAmount,fixingAmount}){
    return(
        <div className="roomstatuslabel-container">
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-label">Booked</span>
                <span className="roomstatuslabel-amount">{bookedAmount ? bookedAmount : 0 }</span>
            </div>
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-label">Fixing</span>
                <span className="roomstatuslabel-amount">{fixingAmount ? fixingAmount : 0}</span>
            </div>
        </div>
    )
}

export default RoomstatusLabelLeft;
