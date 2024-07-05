import "./dashboard-balance.css"
import {useState} from "react";

import eye from "../../../assets/icons/icons8-eye-90.png"
import eyeSlash from "../../../assets/icons/icons8-invisible-90.png"
export function DasboardBalance(){
    const [eyeClicked, setEyeClicked] = useState(false)


    return(
        <div className={"Balance_container"}>

            <div className={"Balance"}>
                <h2 className={`Balance-number ${eyeClicked ? 'Balance-hidden' : ''}`}>
                    {eyeClicked ? "********" : "10.000.000VND"}
                </h2>
            </div>
            <img className={"Balance-Eye"}
                 src={eyeClicked ? eye : eyeSlash}
                 alt={eyeClicked ? "Eye" : "Eye Slash"}
                 onClick={() => setEyeClicked(!eyeClicked)}
            />
        </div>
    )
}