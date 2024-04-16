import "./textarea.css";

const TextArea = ({id, placeHolder,onchange }) => {
    const handleChange = (e) => {
        onchange(e.target.value);
    }

    return ( 
        <div className="TextArea-Content">
            <label htmlFor={id}></label>
            <textarea placeholder={placeHolder} onChange={handleChange}/>
        </div>        
     );
}
 
export default TextArea;