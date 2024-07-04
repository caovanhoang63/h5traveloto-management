import {getRoomFacilities} from "../../../api/get-roomfacilities";
import {useEffect, useState} from "react";
import FacilitiesProperty from "../../../components/facilities property/facilities-property";
import RoomFacilities from "../../../components/RoomFacilities/RoomFacilities";
import {RoomTypesProvider} from "../../../context/createroomtypes-context";


export const RoomTypesFacilities = () => {


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

    const nextOnClick = () => {

    }
    return (
        <RoomTypesProvider>
            <div className="CH_PropertyFacilities-Container">

                <div className="CH_PropertyFacilities-Main">
                    <ul>
                        {allProperty}
                    </ul>
                </div>
            </div>
        </RoomTypesProvider>

    );
}

