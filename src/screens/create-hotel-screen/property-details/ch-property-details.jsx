import TextBlock from "../../../components/textblock/textblock";
import TextArea from "../../../components/textarea/textarea";
import UnitTextBox from "../../../components/unittextbox/unittextbox";
import Divider from "../../../components/divider/divider";
import "./ch-property-details.css";
import {useContext} from "react";
import {InfoContext} from "../../../context/createhotel-context";
import {PrimaryButton} from "../../../components/button/button";

const CH_PropertyDetails = () => {
    const { info, setInfo } = useContext(InfoContext);
    const distantOnChange = (e) => {
        info.hotel_detail.distance_to_center_city = parseInt(e);
    }
    const nextOnClick = () => {
        console.log(info);
    }

    const descriptionOnChange = (e) => {
        info.hotel_detail.description = e
    }

    const numberoffloorsOnChange = (e) => {
        info.hotel_detail.number_of_floor = parseInt(e)
    }
    const locationDetailsOnchange = (e) => {
        info.hotel_detail.location_detail = e
    }


    return (

        <div className="CH_PropertyDetails-Container">
            <div className="CH_PropertyDetails-Header">
                Property Details
            </div>
            <div className="CH_PropertyDetails-Main">
                <div className="CH_PropertyDetails-Property Distant">
                    <div className="CH_PropertyDetails-Title">
                        <TextBlock content="Distant to City Center" />
                    </div>
                    <div className="CH_PropertyDetails-Content">
                        <div className="CH_PropertyDetails-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="km" onchange={distantOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyDetails-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyDetails-Property Floors">
                    <div className="CH_PropertyDetails-Title">
                        Number of Floors                    
                    </div>
                    <div className="CH_PropertyDetails-Content">
                        <div className="CH_PropertyDetails-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="floors" onchange={numberoffloorsOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyDetails-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyDetails-Property Floors">
                    <div className="CH_PropertyDetails-Title">
                        Description
                    </div>
                    <div className="CH_PropertyDetails-Content">
                        <div className="CH_PropertyDetails-Content-Box">
                            <div style={{width: "400px", height: "100px"}}>
                                <TextArea onchange={descriptionOnChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyDetails-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyDetails-Property Floors">
                    <div className="CH_PropertyDetails-Title">
                        Location Details
                    </div>
                    <div className="CH_PropertyDetails-Content">
                        <div className="CH_PropertyDetails-Content-Box">
                            <div style={{width: "400px", height: "100px"}}>
                                <TextArea onchange={locationDetailsOnchange} />
                            </div>
                        </div>
                    </div>
                </div>
                <PrimaryButton onClick={nextOnClick}>Next</PrimaryButton>
            </div>
        </div>
     );
}
 
export default CH_PropertyDetails;