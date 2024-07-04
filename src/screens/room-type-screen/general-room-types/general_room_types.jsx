import TextBlock from "../../../components/textblock/textblock";
import FlexTextbox from "../../../components/flextextbox/flextextbox";
import Divider from "../../../components/divider/divider";
import FlexComboBox from "../../../components/flexcombobox/flexcombobox";
import {PrimaryButton} from "../../../components/button/button";
import UnitTextBox from "../../../components/unittextbox/unittextbox";
import Checkbox from "../../../components/checkbox/checkbox";
import DragAndDrop from "../../../components/dragdropphotos/DragAndDrop";
import useFileSelection from "../../../hooks/useFileSelection";
import "./general_room_types.css";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
/*
import {RoomTypesContext, RoomTypesProvider} from "../../../context/createroomtypes-context";
*/
const RoomTypesContext = require("../../../context/createroomtypes-context").RoomTypesContext;

export function GeneralRoomTypes() {
    const navigate = useNavigate();

    const {roomTypesInfo, setRoomTypesInfo} = useContext(RoomTypesContext);
    let hotelNameOnChange = (e) => {
        console.log(e);
    }
    let cancelPolicyOnChange = (e) => {
        console.log(e);
    }
    let minimumAgesOnChange = (e) => {
        console.log(e);
    }
    let requireDocumentOnChange = (e) => {
        console.log(e);
    }
    const [addFileLogo, removeFileLogo, selectedLogo] = useFileSelection();

    let nextButtonOnClick = () => {
        navigate("/create-facilities")
    }
    return (

        <div className="CH_GeneralInformation-Container">
            <div className="CH_GeneralInformation-Header">
                General Information
            </div>
            <div className="CH_GeneralInformation-Main">
                <div className="CH_GeneralInformation-Property Name">
                    <div className="CH_GeneralInformation-Title">
                        <TextBlock content="Property Name"/>
                    </div>
                    <div className="CH_GeneralInformation-Content">
                        <div className="CH_GeneralInformation-Content-Box">
                            <FlexTextbox onChange={hotelNameOnChange}/>
                        </div>
                    </div>
                </div>
                <div className="CH_GeneralInformation-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Room Area
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="m2" onchange={minimumAgesOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Price
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="VND" onchange={cancelPolicyOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Maximun Occupancy
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="Persons" onchange={cancelPolicyOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Pay In Hotel
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <Checkbox onChange={requireDocumentOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Free Breakfast
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <Checkbox onChange={requireDocumentOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Cancel Policy
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <Checkbox onChange={requireDocumentOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyDetails-Property Floors">
                    <div className="CH_PropertyDetails-Title">
                        Photos
                    </div>
                    <div className="CH_PropertyDetails-Content">
                        <div className="CH_PropertyDetails-Content-Box">
                            <DragAndDrop addFile={addFileLogo} removeFile={removeFileLogo}
                                         selectedFiles={selectedLogo}/>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyDetails-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
            </div>
            <div className={"ButtonContainer1"}>
                <PrimaryButton children={"Next"} onClick={nextButtonOnClick}/>
                <PrimaryButton children={"Cancel"}/>

            </div>

        </div>

    )
}