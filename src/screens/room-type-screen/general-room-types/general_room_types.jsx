import TextBlock from "../../../components/textblock/textblock";
import FlexTextbox from "../../../components/flextextbox/flextextbox";
import Divider from "../../../components/divider/divider";
import {PrimaryButton} from "../../../components/button/button";
import UnitTextBox from "../../../components/unittextbox/unittextbox";
import Checkbox from "../../../components/checkbox/checkbox";
import DragAndDrop from "../../../components/dragdropphotos/DragAndDrop";
import useFileSelection, {useFileSelectionLogo} from "../../../hooks/useFileSelection";
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
    let roomTypeNameOnChange = (e) => {
        roomTypesInfo.name = e;
        setRoomTypesInfo(roomTypesInfo);
        console.log(roomTypesInfo)
    }
    let roomAreaOnChange = (e) => {
        roomTypesInfo.area =   parseFloat(e);
        setRoomTypesInfo(roomTypesInfo);
        console.log(roomTypesInfo)
    }
    let minimumAgesOnChange = (e) => {
        console.log(e);
    }
    let requireDocumentOnChange = (e) => {
        console.log(e);
    }

    let nextButtonOnClick = () => {
        navigate("/create-facilities")
    }
    let priceOnChange = (e) => {
        roomTypesInfo.price = parseFloat(e);
        setRoomTypesInfo(roomTypesInfo);
        console.log(roomTypesInfo)
    }
    const handleCheckboxClick = (event) => {
        // Trạng thái mới của checkbox sau khi click
        roomTypesInfo.pay_in_hotel = event.target.checked;
        setRoomTypesInfo(roomTypesInfo);
        console.log(roomTypesInfo)
    };

    let freeBreakfastCheckOnChange = (e) => {
        // Trạng thái mới của checkbox sau khi click
        roomTypesInfo.break_fast = e.target.checked;
        setRoomTypesInfo(roomTypesInfo);
        console.log(roomTypesInfo)
    }
    let cancelCheckOnChange = (e) => {
        roomTypesInfo.free_cancel = e.target.checked;
        setRoomTypesInfo(roomTypesInfo);
        console.log(roomTypesInfo)
    }
    let maxOccupancyOnChange = (e) => {
        roomTypesInfo.max_customer = parseInt(e);
        setRoomTypesInfo(roomTypesInfo);
        console.log(roomTypesInfo)
    }
    let cancelOnClick = () => {
        navigate("/roomtypes")
    };
    return (

        <div className="RoomType-General-Container">

            <div className="CH_GeneralInformation-Main">
                <div className="CH_GeneralInformation-Property Name">
                    <div className="CH_GeneralInformation-Title">
                        <TextBlock content="Property Name"/>
                    </div>
                    <div className="CH_GeneralInformation-Content">
                        <div className="CH_GeneralInformation-Content-Box">
                            <FlexTextbox onChange={roomTypeNameOnChange}/>
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
                                <UnitTextBox unit="m2" onchange={roomAreaOnChange}/>
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
                                <UnitTextBox unit="VND" onchange={priceOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Maximum Occupancy
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="Persons" onchange={maxOccupancyOnChange}/>
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
                                <Checkbox onChange={requireDocumentOnChange} onclick={handleCheckboxClick}/>
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
                                <Checkbox onChange={freeBreakfastCheckOnChange} onclick={freeBreakfastCheckOnChange}/>
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
                                <Checkbox onChange={cancelCheckOnChange} onclick={cancelCheckOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                {/*<div className="CH_PropertyDetails-Property Floors">
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
                </div>*/}
            </div>
            <div className={"ButtonContainer1"}>
                <PrimaryButton children={"Next"} onClick={nextButtonOnClick}/>
                <PrimaryButton children={"Cancel"} onClick={cancelOnClick}/>

            </div>

        </div>

    )
}