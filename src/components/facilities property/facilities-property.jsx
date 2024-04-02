import ico_arrow_right_active from "../../assets/icons/arrow_right_active.png";
import Divider from "../divider/divider";
import "./facilities-property.css";

const FacilitiesProperty = ({data}) => {

    const facilities = data.facilities && data.facilities.map && data.facilities.map(facility => (
        <li key={data.facilities.id}>
            <input type="checkbox" name="facility" id="facility"/>
            <div>{facility.name_en}</div>
        </li>
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
                    <div className="FacilitiesProperty-Header-Utilities-Btn">
                        <div>
                            Expand
                        </div>
                        <img src={ico_arrow_right_active} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
            </div>
            <div className="FacilitiesProperty-Main">
                <ul>
                    {facilities}
                </ul>
            </div>
        </div>
     );
}
 
export default FacilitiesProperty;