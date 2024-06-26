import {GreenTag} from "../../../../components/tag/tag";
import "./roomtag.css";
import {Red400, Red50} from "../../../../common/constant";

export default function Roomtag({name, price, numberofdeals, numberofrooms, maxnumberofrooms, style}) {

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const _style= {
        padding:"2px 8px 2px 8px",
        justifyContent: "center",
        textAlign: "center",
        height: "22px",
        width: "59px",
        borderRadius: "8px",
        fontWeight: "bold",
        fontsize: "1.2em",
    }
    if(style === undefined){
        style = _style;
    }

    return (
        <div className="roomtag-container">
            {/*<div className="roomtag-label">
                <GreenTag style={style} classname="roomtag-deals">{numberofdeals + " Deals"}</GreenTag>

            </div>*/}
            {numberofdeals !== 0 && (
                <div className="roomtag-label">
                    <GreenTag style={style} classname="roomtag-deals">{numberofdeals + " Deals"}</GreenTag>
                </div>
            )}
            <div className="roomtag-content">
                <label className="roomtag-name">{name}</label>
                {/*<label className="roomtag-numberofrooms">{numberofrooms + "/" + maxnumberofrooms}</label>*/}
                <p className="roomtag-p">
                    <span className="roomtag-span-numberofrooms">{numberofrooms}</span>/{maxnumberofrooms}
                </p>
                <p className="roomtag-p">
                    <span className="roomtag-span-price">{formatPrice(price) + "VND"}</span>/day
                </p>

            </div>
        </div>
    );
}