import { useState } from "react";
import "./unittextbox.css";

const UnitTextBox = ({id, classname, title, placeHolder, unit,onchange}) => {
    const [text, setText] = useState('');
    const [isActive, setActive] = useState(false);

    var isFocus = false;

    const handleChange = (e) => {
        setText(e.target.value);
        if (onchange) {
            onchange(e.target.value);
        }
    };
    const handleFocusIn = () => {
        isFocus = true;
        setActive(true);
    }
    const handleFocusOut = () => {
        isFocus = false;
        setActive(false);
    }
    const handleHoverIn = () => {
        setActive(true);
    }
    const handleHoverOut = () => {
        if (!isFocus)
            setActive(false);
    }

    return ( 
        // <div className={classname}>
            <div className="UnitTextBox-Container">
                <label className="UnitTextBox-Label" htmlFor={id}>
                    {title || ""}
                </label>
                <input 
                    id={id}
                    type="text"
                    value={text} 
                    onChange={handleChange}
                    onFocus={handleFocusIn}
                    onBlur={handleFocusOut}
                    onMouseOver={handleHoverIn}
                    onMouseOut={handleHoverOut}
                    placeholder={placeHolder}
                    className="UnitTextBox-Input"
                    />
                <div className={"UnitTextBox-Unit" + (isActive ? " active" : "")}>
                    <div className="UnitTextBox-Unit-Content">
                        {unit}
                    </div>
                </div>
            </div>
        // </div>
     );
}
 
export default UnitTextBox;