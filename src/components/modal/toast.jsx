import Swal from "sweetalert2";
import "./toast.css";

function Toast({ title, type }) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
            popup: `custom-toast`,
        },
    });
    Toast.fire({
        icon: type,
        title: title,
    });
}

export default Toast;
