import FlexTextBox from "../../../flextextbox/flextextbox";
import FlexComboBox from "../../../flexcombobox/flexcombobox";
import "./modal-info-customer.css";

function ModalInfoCustomer({}) {
    return (
        <div className="modal-info-customer__container">
            <div className="modal-info-customer__field">
                <span className="label-field">Customer Name</span>
                <FlexTextBox
                    classname={"modal-info-customer__input"}
                    placeHolder={"Enter Customer Name"}
                />
            </div>
            <div className="modal-info-customer__field">
                <span className="label-field">Phone Number</span>
                <FlexTextBox
                    classname={"modal-info-customer__input"}
                    placeHolder={"Enter Phone Number"}
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
                    options={[{ value: "Male" }, { value: "Female" }]}
                    onChange={() => {}}
                />
            </div>
        </div>
    );
}

export default ModalInfoCustomer;
