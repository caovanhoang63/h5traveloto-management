import "./ch-property-policies.css";
import TextBlock from "../../../components/textblock/textblock";
import UnitTextBox from "../../../components/unittextbox/unittextbox";
import Divider from "../../../components/divider/divider";
import TextArea from "../../../components/textarea/textarea";
import FlexTextbox from "../../../components/flextextbox/flextextbox";
import CheckBox from "../../../components/checkbox/checkbox";
import Checkbox from "../../../components/checkbox/checkbox";
import FlexCombobox from "../../../components/flexcombobox/flexcombobox";
import Combobox from "../../../components/combobox/combobox";
import {PaintRoller} from "@phosphor-icons/react";
import {PrimaryButton} from "../../../components/button/button";
import HourPicker from "../../../components/hourpicker/HourPicker";
import {useContext, useEffect} from "react";
import {InfoContext, InfoProvider} from "../../../context/createhotel-context";

const CH_PropertyPolicies = () => {


    const locationDetailsOnchange = (e) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            hotel_detail: {
                ...prevInfo.hotel_detail,
                additional_policies: e
            }
        }));
    }

    const SmokingPolicyOptions = [
        {value: "free"},
        {value: "limit"},
        {value: "ban"},
    ];
    const PetPolicyOptions = [
        {value: "free"},
        {value: "large"},
        {value: "small"},
        {value: "ban"},

    ];
    const { info, setInfo } = useContext(InfoContext);

    const checkInTimeOnchange = (value) => {
        const hour = String(value.$H).padStart(2, '0');
        const minute = String(value.$m).padStart(2, '0');
        const second = String(value.$s).padStart(2, '0');
        const checkInTime = `${hour}:${minute}:${second}`;

        setInfo((prevInfo) => ({
            ...prevInfo,
            hotel_detail: {
                ...prevInfo.hotel_detail,
                check_in_time: checkInTime
            }
        }));
    }
    const checkOutTimeOnchange = (value) => {
        const hour = String(value.$H).padStart(2, '0');
        const minute = String(value.$m).padStart(2, '0');
        const second = String(value.$s).padStart(2, '0');
        const checkOutTime = `${hour}:${minute}:${second}`;

        setInfo((prevInfo) => ({
            ...prevInfo,
            hotel_detail: {
                ...prevInfo.hotel_detail,
                check_out_time: checkOutTime
            }
        }));
    }
    const minimumAgesOnChange = (value) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            hotel_detail: {
                ...prevInfo.hotel_detail,
                minimum_age: parseInt(value)
            }
        }));
    }
    const cancelPolicyOnChange = (value) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            hotel_detail: {
                ...prevInfo.hotel_detail,
                cancellation_policy: parseInt(value)
            }
        }));
    }
    const smokingOnChange = (e) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            hotel_detail: {
                ...prevInfo.hotel_detail,
                smoking_policy: e
            }
        }));
    }

    const requireDocumentOnChange = (value) => {
        console.log(value);
    }

    const petOnChange = (e) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            hotel_detail: {
                ...prevInfo.hotel_detail,
                pet_policy: e
            }
        }));
    }
    const nextOnClick = () => {
        console.log(info);
    }


    return (
        <div className="CH_PropertyPolicies-Container">
            <div className="CH_PropertyPolicies-Header">
                Property Policies
            </div>
            <div className="CH_PropertyPolicies-Main">
                <div className="CH_PropertyPolicies-CheckinTime">
                    <div className="CH_PropertyPolicies-Title">
                        <TextBlock content="Check-In Time"/>
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <HourPicker label={"From"} onChange={checkInTimeOnchange}/>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-CheckoutTime">
                    <div className="CH_PropertyPolicies-Title">
                        <TextBlock content="Check-Out Time"/>
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <HourPicker label={"To"} onChange={checkOutTimeOnchange}/>

                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Require Documents
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
                        Minimum Ages
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="years old" onchange={minimumAgesOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Cancellation Policy
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "150px", height: "35px"}}>
                                <UnitTextBox unit="%" onchange={cancelPolicyOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Smoking Policy
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <FlexCombobox options={SmokingPolicyOptions} onChange={smokingOnChange}/>


                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Pet Policy
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div className={"CH_PropertyPolicies-Content-Box-Address"}>
                                <FlexCombobox options={PetPolicyOptions} onChange={petOnChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyPolicies-Property Floors">
                    <div className="CH_PropertyPolicies-Title">
                        Additional Policies
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <div style={{width: "400px", height: "100px"}}>
                                <TextArea onchange={locationDetailsOnchange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <PrimaryButton onClick={nextOnClick}>Next</PrimaryButton>
            </div>
        </div>
    );
}

export default CH_PropertyPolicies;