import "./overviewtag.css";
function Overviewtag({header, label, contentNumber}){
    return(
        <div className="overviewtag-container">
            <label className="overviewtag-header">{header}</label>
            <div className="overviewtag-content">
                <label className="overviewtag_label">{label}</label>
                <label className="overviewtag-contentNumber">{contentNumber}</label>
            </div>
        </div>
    );
}
export default Overviewtag;