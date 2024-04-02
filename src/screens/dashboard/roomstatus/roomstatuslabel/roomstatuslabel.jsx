import "./roomstatuslabel.css"
function RoomstatusLabel({label,roomAmount,cleanAmount,dirtyAmount,inspectedAmount}){
    return(
        <div className="roomstatuslabel-container">
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-roomtype-label">{label}</span>
                <span className="roomstatuslabel-roomtype-amount">{roomAmount}</span>
            </div>
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-label">Clean</span>
                <span className="roomstatuslabel-amount">{cleanAmount}</span>
            </div>
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-label">Dirty</span>
                <span className="roomstatuslabel-amount">{dirtyAmount}</span>
            </div>
            <div className={"roomstatuslabel-content-container"}>
                <span className="roomstatuslabel-label">Inspected</span>
                <span className="roomstatuslabel-amount">{inspectedAmount}</span>
            </div>
        </div>
    )
}

export default RoomstatusLabel;
