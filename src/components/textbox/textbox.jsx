import React, {useState} from 'react'
import './textbox.css'

const Textbox = ({id,classname,title,placeHolder}) => {
    const [text, setText] = useState('');
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    return (<div className={classname}>
            <div className="textbox-container">
                <label className='textbox-label'
                       htmlFor={id}>{title || ""}
                </label>
                <input
                    id={id}
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder={placeHolder}
                    className="textbox-input"
                />
            </div>
        </div>

    );
  };
  
  export default Textbox;