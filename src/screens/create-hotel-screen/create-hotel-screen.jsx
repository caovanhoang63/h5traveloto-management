import img_LogoFull from "../../assets/icons/logofull.png";
import SidebarCreateHotel from "../../components/sidebar-create-hotel/sidebar-create-hotel";

import './create-hotel-screen.css';

const CreateHotel = () => {

    const data = [
        {
            id: 1,
            content: "General Information",
            taskNum: 10
        },
        {
            id: 2,
            content: "Property Details",
            taskNum: 0
        },
        {
            id: 3,
            content: "Property Facilities",
            taskNum: 5
        },
        {
            id: 4,
            content: "Photos",
            taskNum: 5
        },
        {
            id: 5,
            content: "Payment",
            taskNum: 5
        }
    ]

	const userMail = "user@gmail.com";

    return ( 
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
                <div>Something</div>
            </div>
        </div>
    </div>
    );
}
 
export default CreateHotel;