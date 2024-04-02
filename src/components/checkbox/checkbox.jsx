import "./checkbox.css";

const CheckBox = () => {
    return ( 
        <label className="CheckBox-Container">
            <input className="CheckBox" type="checkbox"/>
            <span className="CheckMark"></span>
        </label>
     );
}
 
export default CheckBox;