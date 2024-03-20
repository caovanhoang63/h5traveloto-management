import React, {useState} from 'react'
import './textbox.css'

const Textbox = (props) => {
    const [text, setText] = useState('');
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    return (
      <div className="textbox-container">
      <label className='textbox-label' 
        htmlFor='textbox-input'>{props.title || ""}
      </label>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder={props.placeHolder}
          className="textbox-input"
        />
      </div>
    );
  };
  
  export default Textbox;