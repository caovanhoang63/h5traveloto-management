import "./checkbox.css";

const CheckBox = ({content,onclick}) => {
    return ( 
        <label className="CheckBox-Container">
            <input className="CheckBox" type="checkbox" onClick={onclick}/>
            <span className="CheckBox-CheckMark"></span>
            {content}
        </label>
     );
}
 
export default CheckBox;