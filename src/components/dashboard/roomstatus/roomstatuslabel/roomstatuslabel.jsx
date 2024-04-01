import "./roomstatuslabel.css"
function RoomstatusLabel({label,amount}){
    return(
        <div className="roomstatuslabel-container">
        <label className="roomstatuslabel-label">{label}</label>
        <label className="roomstatuslabel-amount">{amount}</label>
        </div>
    )
}
export default RoomstatusLabel;
