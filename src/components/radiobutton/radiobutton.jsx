// import "./radiobutton.css";

const RadioButton = (group, value) => {
    return ( 
        <label className="RadioButton-Container">
            <input type="radio" name={group} value={value}/>
            <span className="RadioButton-Checkmark"/>
        </label>
    );
}
 
export default RadioButton;