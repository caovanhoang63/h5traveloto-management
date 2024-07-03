import TextBlock from "../../../components/textblock/textblock";
import UnitTextBox from "../../../components/unittextbox/unittextbox";
import Divider from "../../../components/divider/divider";
import TextArea from "../../../components/textarea/textarea";
import {PrimaryButton} from "../../../components/button/button";

import DragAndDrop from '../../../components/dragdropphotos/DragAndDrop';
import useFileSelection from '../../../hooks/useFileSelection';
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
} from "react-geocode";
import {postCreatehotel} from "../../../api/create-hotel/post-createhotel";
import {uploadFile} from "../../../api/create-hotel/upload-image";

// Set default response language and region (optional).
// This sets default values for language and region for geocoding requests.
/*
setDefaults({
    key: "AIzaSyA29xIpnJZRE4BDhAoZD7YVGLeB4DVUqpo", // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
});

const address = "1600 Amphitheatre Parkway, Mountain View, CA";
geocode(RequestType.ADDRESS, address)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });

*/

const CH_PhotosInformation = () => {
    const [addFileLogo, removeFileLogo, selectedLogo] = useFileSelection();
    const [addFileImages, removeFileImages] = useFileSelection();

    const nextOnClick = () => {


    }
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
                            <DragAndDrop addFile={addFileLogo} removeFile={removeFileLogo} selectedFiles={selectedLogo}/>
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
            <PrimaryButton onClick={nextOnClick}>Next</PrimaryButton>

        </div>

    );
}

export default CH_PhotosInformation;