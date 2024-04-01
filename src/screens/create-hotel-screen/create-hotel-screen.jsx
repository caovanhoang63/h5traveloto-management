import img_LogoFull from "../../assets/icons/logofull.png"
import './create-hotel-screen.css';

const CreateHotel = () => {
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
                <div className="CreateHotelScreen-SideBar">
        		</div>  
            </div>
        </div>
    </div>
    );
}
 
export default CreateHotel;