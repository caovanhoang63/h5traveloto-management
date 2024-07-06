import FacilitiesProperty from "../../../../components/facilities property/facilities-property";
import "./ch-property-facilities.css";
import {useContext, useEffect, useState} from "react";
import {InfoContext} from "../../../../context/createhotel-context";
import {PrimaryButton} from "../../../../components/button/button";
import {getHotelfacilities} from "../../../../api/create-hotel/get-hotelfacilities";
import {useNavigate} from "react-router-dom";

const CH_PropertyFacilities = () => {
    const { info, setInfo } = useContext(InfoContext);


    const [facility_data, setFacility_data] = useState({});
    useEffect(() => {
        getHotelfacilities().then((res => {
            setFacility_data(res.data)
        })).catch(
            (e) => {
                // handle loi
            }).finally(

        )
    }, []);
    const allProperty =
        facility_data &&
        facility_data.map &&
        facility_data.map(facility => (
            <li key={facility.id}>
                <FacilitiesProperty data={facility}/>
            </li>
        ));

    const navigate = useNavigate();
    const nextOnClick = () => {
        console.log(info)
        navigate("/createhotel/photos")
        /*console.log(localStorage.getItem("token"))
        postCreatehotel(info).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })*/
    }
    return (

        <div className="CH_PropertyFacilities-Container">
            <div className="CH_PropertyFacilities-Header">
                Property Facilities
            </div>
            <div className="CH_PropertyFacilities-Main">
                <ul>
                    {allProperty}
                </ul>
            </div>
            <PrimaryButton onClick={nextOnClick}>Next</PrimaryButton>
        </div>
    );
}

export default CH_PropertyFacilities;