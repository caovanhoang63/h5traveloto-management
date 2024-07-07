import React from "react";
import "./modal.css";
import { PrimaryButton } from "../button/button";
import { TransparentButton } from "../button/button";

function Modal({
    title = "",
    content,
    onClose,
    onConfirm,
    buttonCloseText = "Close",
    buttonSaveText = "Save",
}) {
    const handleClickOutside = (e) => {
        if (e.target.classList.contains("modal__overlay")) {
            onClose(); // Call onClose function passed as prop
        }
    };

    return (
        <div className="modal__overlay" onClick={handleClickOutside}>
            <div className="modal__container">
                {title !== "" && <div className="modal__title">{title}</div>}
                <div className="modal__content">{content}</div>
                <div className="modal__container__button">
                    <PrimaryButton
                        className={"modal__button-save"}
                        onClick={onConfirm}
                    >
                        {buttonSaveText}
                    </PrimaryButton>
                    <TransparentButton
                        className={"modal__button-close"}
                        border={true}
                        alt=""
                        onClick={onClose}
                    >
                        {buttonCloseText}
                    </TransparentButton>
                </div>
            </div>
        </div>
    );
}

export default Modal;
