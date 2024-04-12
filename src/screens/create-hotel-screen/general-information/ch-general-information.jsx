import TextBlock from "../../../components/textblock/textblock";
import FlexComboBox from "../../../components/flexcombobox/flexcombobox";
import FlexTextbox from "../../../components/flextextbox/flextextbox";
import Divider from "../../../components/divider/divider";
import RadioButton from "../../../components/radiobutton/radiobutton";
import {SecondaryButton} from "../../../components/button/button";
import ico_plus from "../../../assets/icons/plus.png";
import ico_plus_active from "../../../assets/icons/plus-active.png";
import "./ch-general-information.css";
import {useEffect, useState} from "react";
import {listReviews} from "../../../api/reviews";
import {getProvinces} from "../../../api/create-hotel/get-provinces";
import {getHoteltypes} from "../../../api/create-hotel/get-hoteltypes";
import {getWards} from "../../../api/create-hotel/get-wards";
import {getDistricts} from "../../../api/create-hotel/get-districts";

const CH_GeneralInformation = () => {
    //get hotel types
    const [hoteltypes, setHoteltypes] = useState([]);
    useEffect(() => {
        getHoteltypes().then((res => {
            setHoteltypes(res.data)
        })).catch(
            (e) => {
                // handle loi
            }).finally(

        )
    }, []);
    const propertyTypes = hoteltypes.map && hoteltypes.map(type => (
        <li key={type.id}>
            <div className="PropertyType-Containter">
                <RadioButton
                    group="propertyType"
                    value={type.id}
                    content={
                        <div className="PropertyType-Field">
                            <div className="PropertyType-Field-Name">
                                {type.name}
                            </div>
                            <div className="PropertyType-Field-Description">
                                {type.description}
                            </div>
                        </div>
                    }/>
            </div>
        </li>
    ))

    //get provinces
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    useEffect(() => {
        getProvinces().then((res => {
            setProvinces(res.data)

        })).catch(
            (e) => {
                // handle loi
            }).finally(

        )
    }, []);

    const provinceOptions = provinces.map(province => ({
        value: province.name,
        code: province.code
    }));
    const handleProvinceChange = (value) => {
        const selectedProvince = provinces.find(province => province.name === value);
        if (selectedProvince) {
            setSelectedProvince(selectedProvince.code);

        }
    };

    //get districts
    const [selectedDistrict, setSelectedDistrict] = useState(null)
    const [district, setDistrict] = useState([]);
    useEffect(() => {
        const fetchDistricts = async () => {
            if (selectedProvince) {
                try {
                    const response = await getDistricts(selectedProvince);
                    setDistrict(response.data);
                } catch (e) {
                    // handle error
                }
            }
        };

        fetchDistricts();
    }, [selectedProvince]);
    const districtOptions = district.map(district => ({value: district.name}));
    const handleDistrictChange = (value) => {
        const selectedDistrict = district.find(district => district.name === value);
        if (selectedDistrict) {
            console.log(selectedDistrict.code);
            setSelectedDistrict(selectedDistrict.code);

        }
    };

    //get wards
    const [ward, setWard] = useState([]);
    useEffect(() => {
        const fetchWards = async () => {
            if (selectedDistrict) {
                try {
                    const response = await getWards(selectedDistrict);
                    setWard(response.data);
                } catch (e) {
                    // handle error
                }
            }
        };

        fetchWards();
    }, [selectedDistrict]);
    const wardOptions = ward.map(ward => ({value: ward.name}));


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
                            <FlexTextbox/>
                        </div>
                    </div>
                </div>
                <div className="CH_GeneralInformation-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_GeneralInformation-Property Type">
                    <div className="CH_GeneralInformation-Title">
                        <TextBlock content="Property Type"/>
                    </div>
                    <div className="CH_GeneralInformation-Content">
                        <div className="CH_GeneralInformation-Content-Box">
                            <ul>
                                {propertyTypes}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="CH_GeneralInformation-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_GeneralInformation-Property Address">
                    <div className="CH_GeneralInformation-Title">
                        <TextBlock content="Property Address"/>
                    </div>
                    <div className="CH_GeneralInformation-Content">
                        <div className="CH_GeneralInformation-Content-Box">
                            <div className="CH_GeneralInformation-Content-Box-Address">
                                <TextBlock content="Street Address"/>
                                <FlexTextbox/>
                            </div>
                            <div className="CH_GeneralInformation-Content-Box-Address">
                                <TextBlock content="Province"/>
                                <FlexComboBox options={provinceOptions} placeholderText="Select"
                                              onChange={handleProvinceChange}/>
                            </div>
                            <div className="CH_GeneralInformation-Content-Box-Address">
                                <TextBlock content="District"/>
                                <FlexComboBox options={districtOptions} placeholderText="Select"
                                              onChange={handleDistrictChange}/>
                            </div>
                            <div className="CH_GeneralInformation-Content-Box-Address">
                                <TextBlock content="Ward"/>
                                <FlexComboBox options={wardOptions} placeholderText="Select"/>
                            </div>
                            <div style={{fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px"}}>
                                Location
                            </div>
                            <div style={{display: "flex", flex: "row", gap: "30px"}}>
                                <div className="CH_GeneralInformation-Content-Box-Address">
                                    <TextBlock content="Latitude"/>
                                    <FlexComboBox options={provinceOptions} placeholderText="Select"/>
                                </div>
                                <div className="CH_GeneralInformation-Content-Box-Address">
                                    <TextBlock content="Longitude"/>
                                    <FlexComboBox options={provinceOptions} placeholderText="Select"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CH_GeneralInformation-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_GeneralInformation-Property Hotlines">
                    <div className="CH_GeneralInformation-Title">
                        <TextBlock content="Hotlines"/>
                    </div>
                    <div className="CH_GeneralInformation-Content">
                        <div className="CH_GeneralInformation-Content-Box">
                            <FlexTextbox/>
                        </div>
                        <div className="CH_GeneralInformation-Content-AddContactBtn">
                            <SecondaryButton icon={"only"} src={ico_plus} alt={ico_plus_active}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CH_GeneralInformation;