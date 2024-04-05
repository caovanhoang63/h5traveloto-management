import TextBlock from "../../../components/textblock/textblock";
import Textbox from "../../../components/textbox/textbox";
import Divider from "../../../components/divider/divider";
import RadioButton from "../../../components/radiobutton/radiobutton";
import ComboBox from "../../../components/combobox/combobox";
import { SecondaryButton } from "../../../components/button/button";
import ico_plus from "../../../assets/icons/plus.png";
import ico_plus_active from "../../../assets/icons/plus-active.png";
import "./ch-general-information.css";

const CH_GeneralInformation = () => {

    const datathing = {
        "data": [
          {
            "id": "e5CU5TqMPMAm",
            "status": 1,
            "created_at": "2024-03-22T17:38:32+07:00",
            "updated_at": "2024-03-22T17:38:32+07:00",
            "name": "Hotel",
            "description": "Establishment that provides accommodations, meals, and other services for paying guests (travellers, tourists)"
          },
          {
            "id": "gGzXbwVZJtdw",
            "status": 1,
            "created_at": "2024-03-22T17:39:17+07:00",
            "updated_at": "2024-03-22T17:39:17+07:00",
            "name": "Hostel",
            "description": "Budget accommodation (usually shared-room type) rent by individual travellers (backpackers) or groups"
          },
          {
            "id": "iUwuq6uD6V5R",
            "status": 1,
            "created_at": "2024-03-22T17:39:35+07:00",
            "updated_at": "2024-03-22T17:39:35+07:00",
            "name": "Villa",
            "description": "Furnished country house located in countryside area that is often rented for vacation purpose"
          },
          {
            "id": "3mHP91UN6pvMwH",
            "status": 1,
            "created_at": "2024-03-22T17:39:50+07:00",
            "updated_at": "2024-03-22T17:39:50+07:00",
            "name": "Resort",
            "description": "A fancy accommodation that is located in a very scenic or sometimes remote location without compromising modern technology and amenities"
          },
          {
            "id": "3mKb6Ph3kjwmM9",
            "status": 1,
            "created_at": "2024-03-22T17:40:02+07:00",
            "updated_at": "2024-03-22T17:40:02+07:00",
            "name": "Apartment",
            "description": "Serviced apartment complex with hotel-style booking system that enables travellers to stay for a period of time"
          },
          {
            "id": "3mMo3p2iKSucjP",
            "status": 1,
            "created_at": "2024-03-22T17:40:19+07:00",
            "updated_at": "2024-03-22T17:40:19+07:00",
            "name": "Guest house / B&B",
            "description": "An establishment that offers a spare room in private accommodation (e.g. private house, boarding house). It also provides breakfast"
          },
          {
            "id": "3mPHrgmyPvbSL1",
            "status": 1,
            "created_at": "2024-03-22T17:40:35+07:00",
            "updated_at": "2024-03-22T10:46:54+07:00",
            "name": "Other",
            "description": ""
          }
        ]
    }
    const propertyTypes = datathing.data && datathing.data.map && datathing.data.map(type => (
        <li key={datathing.data.id}>
            <div className="PropertyType-Containter">
                <RadioButton group="propertyType"/>
                <div className="PropertyType-Field">
                    <div className="PropertyType-Field-Name">
                        {type.name}
                    </div>
                    <div className="PropertyType-Field-Description">
                        {type.description}
                    </div>
                </div>
            </div>
        </li>
    ))
    const options = [
        { value: 'Thu Duc' },
        { value: 'Ho Chi Minh'},
        { value: 'Ha Noi' },
    ];
    

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
                            <Textbox/>
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
                                <Textbox/>
                            </div>
                            <div className="CH_GeneralInformation-Content-Box-Address">
                                <TextBlock content="Province"/>
                                <ComboBox options={options} placeholderText="Select"/>
                            </div>
                            <div className="CH_GeneralInformation-Content-Box-Address">
                                <TextBlock content="District"/>
                                <ComboBox options={options} placeholderText="Select"/>
                            </div>
                            <div className="CH_GeneralInformation-Content-Box-Address">
                                <TextBlock content="Ward"/>
                                <ComboBox options={options} placeholderText="Select"/>
                            </div>
                            <div style={{fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px"}}>
                                Location
                            </div>
                            <div style={{display: "flex", flex: "row", gap: "30px"}}>
                                <div className="CH_GeneralInformation-Content-Box-Address">
                                    <TextBlock content="Latitude"/>
                                    <ComboBox options={options} placeholderText="Select"/>
                                </div>
                                <div className="CH_GeneralInformation-Content-Box-Address">
                                    <TextBlock content="Longitude"/>
                                    <ComboBox options={options} placeholderText="Select"/>
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
                            <Textbox/>
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