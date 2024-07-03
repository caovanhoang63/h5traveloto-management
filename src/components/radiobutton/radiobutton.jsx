// import "./radiobutton.css";

const RadioButton = ({group, value, content}) => {
    return ( 
        <label className="RadioButton-Container">
            <input type="radio" name={group} value={value}/>
            <span className="RadioButton-Checkmark"/>
            {content}
        </label>
    );
}
 
export default RadioButton;