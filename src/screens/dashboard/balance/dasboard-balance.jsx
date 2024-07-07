import "./dashboard-balance.css"
import {useState} from "react";

import eye from "../../../assets/icons/icons8-eye-90.png"
import eyeSlash from "../../../assets/icons/icons8-invisible-90.png"
import Modal from "../../../components/modal/modal";
export function DasboardBalance(){
    const [isOpenModal, setIsOpenModal] = useState(true)
    const [eyeClicked, setEyeClicked] = useState(true)

    return(
        <div className={"Balance_container"}>
            <div className={"Balance"}>
                <div className={`Balance-number ${eyeClicked ? 'Balance-hidden' : ''}`}>
                    {eyeClicked ? "********" : "10.000.000VND"}
                </div>
            </div>
            <img className={"Balance-Eye"}
                 src={eyeClicked ? eye : eyeSlash}
                 alt={eyeClicked ? "Eye" : "Eye Slash"}
                 onClick={() => setEyeClicked(!eyeClicked)}
            />
        </div>
        
    )
}