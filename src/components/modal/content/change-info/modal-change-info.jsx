import "./modal-change-info.css";
import FlexTextBox from "../../../flextextbox/flextextbox";
import FlexTextBoxDate from "../../../flextextboxdate/flextextboxdate";
import doraemon from "../../../../assets/icons/doraemon.jpg";
function ModalChangeInfo({props,onChangeName,onChangePhone,onChangeBirth}) {
    return (
        <div className="modal-change-info__container">
            <div className="modal-change-info__avatar">
                <img className="modal-change-info__img"
                     src={doraemon}
                     alt="avatar">
                </img>
                <span className="modal-change-info__name">
                    {props?.first_name} {props?.last_name}
                </span>
            </div>
            <div className="modal-change-info-double">
                <div className="modal-change-info_field">
                    <span className="label-field">Name</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Name"}
                        value={props?.first_name + " " + props?.last_name}
                        onChange={onChangeName}
                    />
                </div>
                <div className="modal-change-info_field">
                    <span className="label-field">Role</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Passport Number"}
                        value={props.role.replace(/\b\w/g, char => char.toUpperCase())}
                        readonly={true}
                    />
                </div>
            </div>
            <div className="modal-change-info-double">
                <div className="modal-change-info_field">
                    <span className="label-field">Phone</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Phone"}
                        value={props.phone}
                        onChange={onChangePhone}
                    />
                </div>
                <div className="modal-change-info_field">
                    <span className="label-field">Email</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Email"}
                        value={props?.email}
                        readonly={true}
                    />
                </div>
            </div>
            <div className="modal-change-info-double">
                <div className="modal-change-info_field">
                    <span className="label-field">Date of birth</span>
                    <FlexTextBoxDate
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter Date of birth"}
                        value={props.date_of_birth}
                        onChange={onChangeBirth}
                    />
                </div>
                <div className="modal-change-info_field">
                    <span className="label-field">Region</span>
                    <FlexTextBox
                        classname={"modal-change-info__input"}
                        placeHolder={"Enter The Region"}
                        value={"Vietnam"}
                        readonly={true}
                    />
                </div>
            </div>

        </div>
    );
}

export default ModalChangeInfo;
