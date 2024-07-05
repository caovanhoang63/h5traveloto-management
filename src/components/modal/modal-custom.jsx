import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";
import "./modal-custom.css";

function ModalCustom({
    onConfirm,
    onClose,
    content,
    confirmButtonText = "Save",
    cancelButtonText = "Cancel",
}) {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (modalVisible) {
            const fireModal = async () => {
                const result = await Swal.fire({
                    html: ReactDOMServer.renderToString(content),
                    showCancelButton: true,
                    confirmButtonText: confirmButtonText,
                    cancelButtonText: cancelButtonText,
                    customClass: {
                        popup: "my-popup", // Thêm lớp tùy chỉnh cho cửa sổ popup
                        header: "my-header", // Thêm lớp tùy chỉnh cho phần tiêu đề
                        actions: "my-actions", // Thêm lớp tùy chỉnh cho phần hành động
                        htmlContainer: "my-html-container", // Thêm lớp tùy chỉnh cho phần nội dung
                        confirmButton: "order-1", // Đặt thứ tự nút xác nhận
                        cancelButton: "order-2", // Đặt thứ tự nút hủy
                    },
                });

                if (result.isConfirmed) {
                    onConfirm();
                } else if (result.isDismissed) {
                    onClose();
                }

                // Reset modal visibility after action
                setModalVisible(false);
            };

            fireModal();
        }
    }, [modalVisible, content, onConfirm, onClose]);

    useEffect(() => {
        // Auto open modal when component mounts
        setModalVisible(true);
    }, []);

    return null;
}

export default ModalCustom;
