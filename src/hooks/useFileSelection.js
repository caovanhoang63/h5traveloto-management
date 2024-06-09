import { useState } from 'react';
const useFileSelection = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const addFile = (file) => {
        setSelectedFiles((currentSelection) => [...currentSelection, file]);
    };
    const removeFile = (file) => {
        setSelectedFiles((currentSelection) => {
            const newSelection = currentSelection.slice();
            const fileIndex = currentSelection.indexOf(file);
            newSelection.splice(fileIndex, 1);
            return newSelection;
        });
    };
    return [addFile, removeFile];
};
export default useFileSelection;
