import TextBlock from "../../../components/textblock/textblock";
import Textbox from "../../../components/textbox/textbox";
import Divider from "../../../components/divider/divider";
import "./ch-general-information.css";

const CH_GeneralInformation = () => {
    return ( 
        <div className="CH_GeneralInformation-Container">
            <div className="CH_GeneralInformation-Header">
                General Information
            </div>
            <div className="CH_GeneralInformation-Main">
                <div className="CH_GeneralInformation-PropertyName">
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
            </div>
        </div>
    );
}
 
export default CH_GeneralInformation;