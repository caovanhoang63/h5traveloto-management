import FlexTextBox from "../../../flextextbox/flextextbox";
import FlexComboBox from "../../../flexcombobox/flexcombobox";
import "./modal-create-deal.css";

function ModalCreateDeal({}) {
    return (
        <div className="modal-create-deal__container">
            <div className="modal-create-deal-double">
                <div className="modal-create-deal_field">
                    <span className="label-field">Deal Name</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Deal Name"}
                    />
                </div>
                <div className="modal-create-deal_field">
                    <span className="label-field">Quantity</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Quantity"}
                    />
                </div>
            </div>
            <div className="modal-create-deal_des">
                <span className="label-field">Description</span>
                <FlexTextBox
                    classname={"modal-create-deal__input"}
                    placeHolder={"Enter Description"}
                />
            </div>
            <div className="modal-create-deal-double">
                <div className="modal-create-deal_field">
                    <span className="label-field">Room Type</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Room Type"}
                    />
                </div>
                <div className="modal-create-deal_field">
                    <span className="label-field">Discount</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Discount"}
                    />
                </div>
            </div>
            <div className="modal-create-deal-double">
                <div className="modal-create-deal_field">
                    <span className="label-field">Start Date</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Start Date"}
                    />
                </div>
                <div className="modal-create-deal_field">
                    <span className="label-field">End Date</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter End Date"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalCreateDeal;
