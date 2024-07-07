import "./modal-change-info.css";
import FlexTextBox from "../../../flextextbox/flextextbox";

function ModalChangeInfo({}) {
    return (
        <div className="modal-change-info__container">
            <div className="modal-change-info__avatar">
                <div className="modal-change-info__img"></div>
                <span className="modal-change-info__name">
                    Hoàng Đẹp Trai Nhất hehe
                </span>
            </div>
            <div className="modal-change-info-double">
                <div className="modal-change-info_field">
                    <span className="label-field">Name</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Name"}
                    />
                </div>
                <div className="modal-change-info_field">
                    <span className="label-field">Passport Number</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Passport Number"}
                    />
                </div>
            </div>
            <div className="modal-change-info-double">
                <div className="modal-change-info_field">
                    <span className="label-field">Phone</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Phone"}
                    />
                </div>
                <div className="modal-change-info_field">
                    <span className="label-field">Email</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Email"}
                    />
                </div>
            </div>
            <div className="modal-change-info-double">
                <div className="modal-change-info_field">
                    <span className="label-field">City</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter City"}
                    />
                </div>
                <div className="modal-change-info_field">
                    <span className="label-field">Region</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter The Region"}
                    />
                </div>
            </div>
            <div className="modal-change-info-double">
                <div className="modal-change-info_field">
                    <span className="label-field">Address</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Address"}
                    />
                </div>
                <div className="modal-change-info_field">
                    <span className="label-field">Zip Code</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Zip Code"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalChangeInfo;
