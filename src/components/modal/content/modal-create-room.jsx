import FlexTextBox from "../../flextextbox/flextextbox";
import "./modal-create-room.css";

function ModalCreateRoom() {
    return (
        <div className="modal-create-room__container">
            <div className="modal-create-room__field">
                <h2>Room Name</h2>
                <FlexTextBox
                    classname={"modal-create-room__input"}
                    label="Room Name"
                />
            </div>
            <div className="modal-create-room__field">
                <h2>Room Type</h2>
                <FlexTextBox
                    classname={"modal-create-room__input"}
                    label="Room Type"
                />
            </div>
            <div className="modal-create-room__field">
                <h2>Floor</h2>
                <FlexTextBox
                    classname={"modal-create-room__input"}
                    label="Floor"
                />
            </div>
        </div>
    );
}

export default ModalCreateRoom;
