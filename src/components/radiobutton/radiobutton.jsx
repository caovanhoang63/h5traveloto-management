// import "./radiobutton.css";

const RadioButton = ({group, value, content,onchange}) => {
    return ( 
        <label className="RadioButton-Container" >
            <input type="radio" name={group} value={value} onChange={onchange}/>
            <span className="RadioButton-Checkmark"/>
            {content}
        </label>
    );
}
 
export default RadioButton;