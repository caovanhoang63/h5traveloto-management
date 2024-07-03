import { useState } from 'react';
import {uploadFile} from "../api/create-hotel/upload-image";

const useFileSelection = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const addFile = async (file) => {
        try {
            // Upload file
            const uploadResult = await uploadFile(file,'hotel-logo');

            // Add file to state with upload result
            setSelectedFiles((currentSelection) => [
                ...currentSelection,
                {
                    ...file,
                    uploadId: uploadResult.id, // Assuming the server returns an ID
                    uploadUrl: uploadResult.url, // Assuming the server returns a URL
                    status: 'uploaded'
                }
            ]);
            console.log('File added:', file, uploadResult)
        } catch (error) {
            console.error('Error adding file:', error);
            // You might want to add error handling here, e.g. showing a notification to the user
        }
    };


    const removeFile = (file) => {
        setSelectedFiles((currentSelection) => {
            const newSelection = currentSelection.filter(f => f.uid !== file.uid);
            // Giải phóng URL object để tránh rò rỉ bộ nhớ
            URL.revokeObjectURL(file.url);
            return newSelection;
        });
    };

    return [addFile, removeFile, selectedFiles];
};

export default useFileSelection;