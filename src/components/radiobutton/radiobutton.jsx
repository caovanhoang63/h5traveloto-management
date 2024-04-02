// import "./radiobutton.css";

const RadioButton = (group) => {
    return ( 
        <label className="RadioButton-Container" htmlFor="radiobutton">
            <input type="radio" name="radio" id="radiobutton"/>
            <span className="RadioButton-CheckMark"/>
        </label>
    );
}
 
export default RadioButton;