import React, { useState } from "react";
import "../flextextbox/flextextbox.css";

const FlexTextBoxDate = ({ id, classname, title, placeHolder, onChange,value="" ,readonly=false}) => {
    const [text, setText] = useState(value);

    const handleDateChange = (e) => {
        let value = e.target.value;

        // Loại bỏ tất cả ký tự không phải số hoặc dấu gạch ngang
        value = value.replace(/[^0-9-]/g, '');

        // Thêm dấu gạch ngang tại vị trí phù hợp
        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        // Chỉ thêm dấu gạch ngang nếu độ dài chuỗi hợp lý
        if (value.length === 2 || value.length === 5) {
            value = value + '-';
        }

        // Giới hạn độ dài của chuỗi nhập vào là 10 ký tự
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        setText(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className={classname}>
            <div className="bettertextbox-container">
                <label className="bettertextbox-label" htmlFor={id}>
                    {title || ""}
                </label>
                <input
                    id={id}
                    type="text"
                    value={text}
                    onChange={handleDateChange}
                    placeholder={placeHolder}
                    className="bettertextbox-input"
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
export default FlexTextBoxDate;