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
import HourPicker from "../../../components/HourPicker";

const CH_PropertyPolicies = () => {
    let locationDetailsOnchange;

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


    const onChange = (value) => {
        console.log(value);
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
                            <TextBlock content="From"/>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyPolicies-CheckoutTime">
                    <div className="CH_PropertyPolicies-Title">
                        <TextBlock content="Check-Out Time"/>
                    </div>
                    <div className="CH_PropertyPolicies-Content">
                        <div className="CH_PropertyPolicies-Content-Box">
                            <TextBlock content="To"/>
                            <FlexTextbox/>
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
                                <Checkbox onChange={onChange}/>
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
                                <UnitTextBox unit="years old"/>
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
                                <UnitTextBox unit="%"/>
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
                            <FlexCombobox options={SmokingPolicyOptions}/>


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
                            <div className={"CH_PropertyPolicies-Content-Box-Address"}>
                                <FlexCombobox options={PetPolicyOptions}/>
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
                <PrimaryButton>Next</PrimaryButton>
            </div>
        </div>
    );
}

export default CH_PropertyPolicies;