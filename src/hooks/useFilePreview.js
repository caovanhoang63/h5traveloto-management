import { Modal } from 'antd';
import { useState } from 'react';
const useFilePreview = () => {
    const [previewVisibility, setPreviewVisibility] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewTitle, setPreviewTitle] = useState('');
    const getBase64Representation = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64Representation(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisibility(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
        );
    };
    const hidePreview = () => {
        setPreviewVisibility(false);
    };
    const previewContent = (
        <Modal
            visible={previewVisibility}
            title={previewTitle}
            footer={null}
            onCancel={hidePreview}
        >
            <img alt={previewTitle} style={{ width: '100%' }} src={previewImage} />
        </Modal>
    );
    return [handlePreview, previewContent];
};
export default useFilePreview;
