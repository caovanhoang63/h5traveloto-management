import "./textarea.css";

const TextArea = ({id, placeHolder}) => {
    return ( 
        <div className="TextArea-Content">
            <label htmlFor={id}></label>
            <textarea placeholder={placeHolder}/>
        </div>        
     );
}
 
export default TextArea;