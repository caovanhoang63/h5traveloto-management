
import useFileSelection, {useFileSelectionImage, useFileSelectionLogo} from "../../../../hooks/useFileSelection";
import DragAndDrop from "../../../../components/dragdropphotos/DragAndDrop";
import {PrimaryButton} from "../../../../components/button/button";
import Divider from "../../../../components/divider/divider";
import "./ch-photos-information.css";
import {useContext} from "react";
import {InfoContext} from "../../../../context/createhotel-context";
import {postCreatehotel} from "../../../../api/create-hotel/post-createhotel";
import Toast from "../../../../components/modal/toast";
import {useNavigate} from "react-router-dom";
const CH_PhotosInformation = () => {
    const [addFileLogo, removeFileLogo] = useFileSelectionLogo();
    const [addFileImages, removeFileImages] = useFileSelectionImage();
    const { info, setInfo } = useContext(InfoContext);
    const navigate = useNavigate();
    const nextOnClick = () => {
        console.log(info)
        postCreatehotel(info).then((res) => {
            console.log(res)
            Toast({
                title: "Create Hotel Successfully!",
                type: "success",
            });
            navigate("/create-general")
        }).catch((err) => {
            console.log(err)
            Toast({
                title: "Create Hotel Failed!",
                type: "error",
            });
        })

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
                            <DragAndDrop addFile={addFileLogo} removeFile={removeFileLogo} />
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
                            <DragAndDrop addFile={addFileImages} removeFile={removeFileImages} />
                        </div>
                    </div>
                </div>

            </div>
            <PrimaryButton onClick={nextOnClick}>Save</PrimaryButton>

        </div>

    );
}

export default CH_PhotosInformation;