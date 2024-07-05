import "./checkbox.css";
import {useState} from "react";

const CheckBox = ({content, onclick}) => {
    const [checked, setChecked] = useState(false);

    return (
        <label className="CheckBox-Container">
            <input className="CheckBox" type="checkbox" defaultChecked={checked}
                   onChange={() => setChecked((state) => !state)} onClick={onclick}/>
            <span className="CheckBox-CheckMark"></span>
            {content}
        </label>
    );
}

export default CheckBox;