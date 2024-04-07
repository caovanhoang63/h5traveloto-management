import "./checkbox.css";

const CheckBox = ({content}) => {
    return ( 
        <label className="CheckBox-Container">
            <input className="CheckBox" type="checkbox"/>
            <span className="CheckBox-CheckMark"></span>
            {content}
        </label>
     );
}
 
export default CheckBox;