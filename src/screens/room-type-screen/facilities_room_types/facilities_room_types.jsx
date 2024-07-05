import {getRoomFacilities} from "../../../api/get-roomfacilities";
import {useContext, useEffect, useState} from "react";
import FacilitiesProperty from "../../../components/facilities property/facilities-property";
import RoomFacilities from "../../../components/RoomFacilities/RoomFacilities";
import {RoomTypesContext, RoomTypesProvider} from "../../../context/createroomtypes-context";
import {PrimaryButton} from "../../../components/button/button";
import {useNavigate} from "react-router-dom";


export const RoomTypesFacilities = () => {
    const navigate = useNavigate();

    const {roomTypesInfo, setRoomTypesInfo} = useContext(RoomTypesContext);

    const [facility_data, setFacility_data] = useState({});
    useEffect(() => {
        getRoomFacilities().then((res => {
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
                <RoomFacilities data={facility}/>
            </li>
        ));

    let saveButtonOnClick = () => {
        console.log(roomTypesInfo)
    };
    let cancelOnClick = () => {
        navigate("/roomtypes")
    };
    return (
            <div className="CH_PropertyFacilities-Container">
                <div className="CH_PropertyFacilities-Main">
                    <ul>
                        {allProperty}
                    </ul>
                </div>
                <div className={"ButtonContainer1"}>
                    <PrimaryButton children={"Save"} onClick={saveButtonOnClick}/>
                    <PrimaryButton children={"Cancel"} onClick={cancelOnClick}/>
                </div>
            </div>
    );
}

