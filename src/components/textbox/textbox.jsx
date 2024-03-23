import React, {useState} from 'react'
import './textbox.css'

const Textbox = ({classname,title,placeHolder}) => {
    const [text, setText] = useState('');
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    return (<div className={classname}>
            <div className="textbox-container">
                <label className='textbox-label'
                       htmlFor='textbox-input'>{title || ""}
                </label>
                <input
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