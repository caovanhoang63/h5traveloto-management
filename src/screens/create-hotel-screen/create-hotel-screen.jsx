import img_LogoFull from "../../assets/icons/logofull.png";
import SidebarCreateHotel from "../../components/sidebar-create-hotel/sidebar-create-hotel";
import CH_GeneralInformation from "./general-information/ch-general-information";
import CH_PropertyDetails from "./property-details/ch-property-details";
import CH_PropertyPolicies from "./property-policies/ch-property-policies";
import CH_PropertyFacilities from "./property-facilities/ch-property-facilities";
import CH_PhotosInformation from "./photos-information/ch-photos-information";
import CH_Payment from "./payment/ch-payment";
import './create-hotel-screen.css';

const CreateHotel = () => {

    const data = [
        {
            id: 1,
            content: "General Information",
            navigate: "",
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

    // const router = createBrowserRouter(
    //     createRoutesFromElements(
    //         <Route path="/">
    //             <Route index element={<CH_GeneralInformation/>}/>
    //             <Route path="property_details" element={<CH_PropertyDetails/>}/>
    //             <Route path="property_facilities" element={<CH_PropertyFacilities/>}/>
    //             <Route path="photos" element={<CH_PhotosInformation/>}/>
    //             <Route path="payment" element={<CH_Payment/>}/>
    //         </Route>
    //     )
    // )

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
                {/* <CH_GeneralInformation></CH_GeneralInformation> */}
                {/* <CH_PropertyFacilities></CH_PropertyFacilities> */}
                {/* <CH_PropertyDetails/> */}
                <CH_PropertyPolicies/>
            </div>
        </div>
    </div>
    );
}
 
export default CreateHotel;