import TextBlock from "../../../components/textblock/textblock";
import Textbox from "../../../components/textbox/textbox";
import "./ch-general-information.css";

const CH_GeneralInformation = () => {
    return ( 
        <div className="CH_GeneralInformation-Container">
            <div className="CH_GeneralInformation-Header">
                General Information
            </div>
            <div className="CH_GeneralInformation-Main">
                <div className="CH_GeneralInformation-Property">
                    <TextBlock className="CH_GeneralInformation-Title" content="Property Name"/>
                    <Textbox className="CH_GeneralInformation-Content"/>
                </div>
            </div>
        </div>
    );
}
 
export default CH_GeneralInformation;