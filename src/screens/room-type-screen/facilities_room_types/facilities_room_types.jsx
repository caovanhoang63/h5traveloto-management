import {getRoomFacilities} from "../../../api/get-roomfacilities";
import {useContext, useEffect, useState} from "react";
import FacilitiesProperty from "../../../components/facilities property/facilities-property";
import RoomFacilities from "../../../components/RoomFacilities/RoomFacilities";
import {RoomTypesContext, RoomTypesProvider} from "../../../context/createroomtypes-context";
import {PrimaryButton} from "../../../components/button/button";
import {useNavigate} from "react-router-dom";
import {postCreateRoomTypes} from "../../../api/create_roomtypes_api";


export const RoomTypesFacilities = () => {
    const navigate = useNavigate();
    const dataPost = {
        "name": "Phòng đơn 3",
        "area": 30,
        "max_customer": 1,
        "images": [
            {
                "id": 0,
                "url": "https://d3jwhct9rpti9n.cloudfront.net/hotels_image/869622166.jpeg",
                "width": 307,
                "height": 164,
                "cloud_name": "s3",
                "extension": ".jpeg"
            },
            {
                "id": 0,
                "url": "https://d3jwhct9rpti9n.cloudfront.net/room_images/957792577.jpg",
                "width": 1030,
                "height": 686,
                "cloud_name": "s3",
                "extension": ".jpg"
            },
            {
                "id": 0,
                "url": "https://d3jwhct9rpti9n.cloudfront.net/room_images/189242030.jpg",
                "width": 900,
                "height": 900,
                "cloud_name": "s3",
                "extension": ".jpg"
            }
        ],
        "bed": {
            "single": 1,
            "other": {
                "sofa": 1
            }
        },
        "pay_in_hotel": true,
        "free_cancel": true,
        "break_fast": false,
        "price": 100000,
        "facility_ids": [1, 2, 3, 4, 5]
    }
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
        }).catch((e) => {
            console.log(e)
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

