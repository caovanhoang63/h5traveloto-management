import img_LogoFull from "../../assets/icons/logofull.png";
import SidebarCreateHotel from "../../components/sidebar-create-hotel/sidebar-create-hotel";
import './create-hotel-screen.css';
import {InfoProvider} from "../../context/createhotel-context";

const CreateHotel = ({...props}) => {

    const data = [
        {
            id: 1,
            content: "General Information",
            navigate: "general_information",
            taskNum: 10
        },
        {
            id: 2,
            content: "Property Details",
            navigate: "property_details",
            taskNum: 0
        },
        {
            id: 3,
            content: "Property Policies",
            navigate: "property_policies",
            taskNum: 0
        },
        {
            id: 4,
            content: "Property Facilities",
            navigate: "property_facilities",
            taskNum: 5
        },
        {
            id: 5,
            content: "Photos",
            navigate: "photos",
            taskNum: 5
        },
        {
            id: 6,
            content: "Payment",
            navigate: "payment",
            taskNum: 5
        }
    ]

    const userMail = "user@gmail.com";

    return (
        <InfoProvider>
            <div className="CreateHotelScreen-Container">
                <div className="CreateHotelScreen-Header">
                    <div className="CreateHotelScreen-Header-Logo">
                        <img src={img_LogoFull}></img>
                    </div>
                    <div className="CreateHotelScreen-Header-UserMail">
                        <div>Logged-in as:</div>
                        <div>{userMail}</div>
                    </div>
                </div>
                <div className="CreateHotelScreen-Main">
                    <div className="CreateHotelScreen-SidebarContainer">
                        <SidebarCreateHotel data={data} progress={10}/>
                    </div>
                    <div className="CreateHotelScreen-Fields">
                        {props.children}
                    </div>
                </div>
            </div>
        </InfoProvider>
    );
}

export default CreateHotel;