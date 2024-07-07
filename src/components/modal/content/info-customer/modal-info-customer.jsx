import FlexTextBox from "../../../flextextbox/flextextbox";
import FlexComboBox from "../../../flexcombobox/flexcombobox";
import "./modal-info-customer.css";

function ModalInfoCustomer({ onChangeName, onChangePhone, onChangeGender }) {
    return (
        <div className="modal-info-customer__container">
            <div className="modal-info-customer__field">
                <span className="label-field">Customer Name</span>
                <FlexTextBox
                    classname={"modal-info-customer__input"}
                    placeHolder={"Enter Customer Name"}
                    onChange={onChangeName}
                />
            </div>
            <div className="modal-info-customer__field">
                <span className="label-field">Phone Number</span>
                <FlexTextBox
                    classname={"modal-info-customer__input"}
                    placeHolder={"Enter Phone Number"}
                    onChange={onChangePhone}
                />
            </div>
            <div className="modal-info-customer__field">
                <span className="label-field">Address</span>
                <FlexTextBox
                    classname={"modal-info-customer__input"}
                    placeHolder={"Enter Address"}
                />
            </div>
            <div className="modal-info-customer__field">
                <span className="label-field">Gender</span>
                <FlexComboBox
                    id={"roomType"}
                    classname={"modal-info-customer__input"}
                    placeholderText={"Select Room Type"}
                    options={[{ value: "male" }, { value: "female" }]}
                    onChange={onChangeGender}
                />
            </div>
        </div>
    );
}

export default ModalInfoCustomer;
