import FlexTextBox from "../../../flextextbox/flextextbox";
import FlexComboBox from "../../../flexcombobox/flexcombobox";
import "./modal-create-deal.css";

function ModalCreateDeal({options=[],
                             onChangeDealName,onChangeQuantity,onChangeDescription,onChangeRoomType,onChangeDiscount,
                         onChangeStartDate,onChangeEndDate}) {
    return (
        <div className="modal-create-deal__container">
            <div className="modal-create-deal-double">
                <div className="modal-create-deal_field">
                    <span className="label-field">Deal Name</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Deal Name"}
                        onChange={onChangeDealName}
                    />
                </div>
                <div className="modal-create-deal_field">
                    <span className="label-field">Quantity</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Quantity"}
                        onChange={onChangeQuantity}
                    />
                </div>
            </div>
            <div className="modal-create-deal_des">
                <span className="label-field">Description</span>
                <FlexTextBox
                    classname={"modal-create-deal__input"}
                    placeHolder={"Enter Description"}
                    onChange={onChangeDescription}
                />
            </div>
            <div className="modal-create-deal-double">
                <div className="modal-create-deal_field">
                    <span className="label-field">Room Type</span>
                    <FlexComboBox
                        id={"roomType"}
                        classname={"modal-create-deal__input"}
                        placeholderText={"Select Room Type"}
                        options={options}
                        onChange={onChangeRoomType}
                    />
                </div>
                <div className="modal-create-deal_field">
                    <span className="label-field">Discount</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Discount"}
                        onChange={onChangeDiscount}
                    />
                </div>
            </div>
            <div className="modal-create-deal-double">
                <div className="modal-create-deal_field">
                    <span className="label-field">Start Date</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter Start Date"}
                        onChange={onChangeStartDate}
                    />
                </div>
                <div className="modal-create-deal_field">
                    <span className="label-field">End Date</span>
                    <FlexTextBox
                        classname={"modal-create-deal__input"}
                        placeHolder={"Enter End Date"}
                        onChange={onChangeEndDate}
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalCreateDeal;
