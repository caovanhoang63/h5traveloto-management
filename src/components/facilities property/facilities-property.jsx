import ico_arrow_right_active from "../../assets/icons/arrow_right_active.png";
import Divider from "../divider/divider";
import CheckBox from "../checkbox/checkbox";
import RadioButton from "../radiobutton/radiobutton";
import "../radiobutton/radiobutton.css";
import "./facilities-property.css";
import { useState } from "react";

const FacilitiesProperty = ({data}) => {
    const [isCollapsed, setCollapse] = useState(true);

    const hanldeExpand = () => {
        if(isCollapsed) setCollapse(false)
        else setCollapse(true);
    };

    const facilities = data.facilities && data.facilities.map && data.facilities.map(facility => (
        <div>
            <li key={data.facilities.id}>
                <CheckBox/>
                <div className="FacilitiesProperty-Main-Title">{facility.name_en}</div>
            </li>   
            <Divider isHorizontal={true} thick="1px" type="dotted" color="#e8f1fd"/> 
        </div>
    ));

    return ( 
        <div className="FacilitiesProperty-Container">
            <div className="FacilitiesProperty-Header">
                <div className="FacilitiesProperty-Header-Title">
                    {data.name_en}
                </div>
                <div className="FacilitiesProperty-Header-Utilities">
                    <div className="FacilitiesProperty-Header-Utilities-Title">
                        Choose facilities
                    </div>
                    <div className={"FacilitiesProperty-Header-Utilities-Btn" + (isCollapsed ? " Collapse" : "")} onClick={hanldeExpand}>
                        <div className="FacilitiesProperty-Btn-Expand">
                            Expand
                        </div>
                        <div className="FacilitiesProperty-Btn-Collapse">
                            Collapse
                        </div>
                        <img src={ico_arrow_right_active} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
            </div>
            <div className={"FacilitiesProperty-Main" + (isCollapsed ? " Collapsed" : "")}>
                <ul>
                    {facilities}
                </ul>
            </div>
        </div>
     );
}
 
export default FacilitiesProperty;