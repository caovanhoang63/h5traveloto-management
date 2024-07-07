import {getRoomFacilities} from "../../../api/get-roomfacilities";
import {useContext, useEffect, useState} from "react";
import FacilitiesProperty from "../../../components/facilities property/facilities-property";
import RoomFacilities from "../../../components/RoomFacilities/RoomFacilities";
import {RoomTypesContext, RoomTypesProvider} from "../../../context/createroomtypes-context";
import {PrimaryButton} from "../../../components/button/button";
import {useNavigate} from "react-router-dom";
import {postCreateRoomTypes} from "../../../api/create_roomtypes_api";
import Toast from "../../../components/modal/toast";


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
        postCreateRoomTypes(roomTypesInfo).then((res) => {
            console.log(res)
            Toast({
                title: "Thêm loại phòng thành công!",
                type: "success",
            });
            navigate("/roomtypes")
        }).catch((e) => {
            console.log(e)
            Toast({
                title: "Thêm loại phòng thất bại!",
                type: "error",
            });

        }).finally(() => {
        })
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

