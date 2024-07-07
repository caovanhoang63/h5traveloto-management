import {message, Upload} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useFilePreview from '../../hooks/useFilePreview';
import {useContext} from "react";
import {InfoContext} from "../../context/createhotel-context";

const { Dragger } = Upload;

const DragAndDrop = ({ addFile, removeFile, selectedFiles }) => {
    const { info, setInfo } = useContext(InfoContext);

    const [handlePreview, previewContent] = useFilePreview();

    const beforeUploadHandler = async (file) => {
        try {
            await addFile(file);
            message.success(`${file.name} file uploaded successfully`);
        } catch (error) {
            message.error(`${file.name} file upload failed.`);
        }
        return false;  // Prevent default upload behavior
    };

    return (
        <>
            <Dragger
                multiple={true}
                onRemove={removeFile}
                showUploadList={true}
                listType="picture-card"
                beforeUpload={beforeUploadHandler}
                onPreview={handlePreview}
                accept="image/*"
                fileList={selectedFiles}
            >
                <p className="ant-upload-drag-icon">
                    <PlusOutlined />
                </p>
                <p className="ant-upload-text">
                    Click this area or drag files to upload
                </p>
            </Dragger>
            {previewContent}
        </>
    );
};

export default DragAndDrop;