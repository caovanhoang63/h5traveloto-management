import TextBlock from "../../../components/textblock/textblock";
import UnitTextBox from "../../../components/unittextbox/unittextbox";
import Divider from "../../../components/divider/divider";
import TextArea from "../../../components/textarea/textarea";
import {PrimaryButton} from "../../../components/button/button";

import DragAndDrop from '../../../components/dragdropphotos/DragAndDrop';
import useFileSelection from '../../../hooks/useFileSelection';

const CH_PhotosInformation = () => {
    const [addFileLogo, removeFileLogo] = useFileSelection();
    const [addFileImages, removeFileImages] = useFileSelection();
    return (

        <div className="CH_PropertyDetails-Container">
            <div className="CH_PropertyDetails-Header">
                Property Details
            </div>
            <div className="CH_PropertyDetails-Main">

                <div className="CH_PropertyDetails-Property Floors">
                    <div className="CH_PropertyDetails-Title">
                        Logo
                    </div>
                    <div className="CH_PropertyDetails-Content">
                        <div className="CH_PropertyDetails-Content-Box">
                            <DragAndDrop addFile={addFileLogo} removeFile={removeFileLogo}/>
                        </div>
                    </div>
                </div>
                <div className="CH_PropertyDetails-Divider">
                    <Divider isHorizontal={true} thick="1px" type="solid" color="#e8f1fd"/>
                </div>
                <div className="CH_PropertyDetails-Property Floors">
                    <div className="CH_PropertyDetails-Title">
                        Images
                    </div>
                    <div className="CH_PropertyDetails-Content">
                        <div className="CH_PropertyDetails-Content-Box">
                            <DragAndDrop addFile={addFileImages} removeFile={removeFileImages}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CH_PhotosInformation;