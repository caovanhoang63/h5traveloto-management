import Swal from "sweetalert2";

// 5 types: success, error, warning, info, question

function ModalStatus({ title = "Title", text = "Text", type = "success" }) {
    return Swal.fire({
        title: title,
        text: text,
        icon: type,
    });
}

export default ModalStatus;
