/*
import axios from 'axios';
import {instance} from "../index";

const uploadFile = async ( file, folder) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    try {
        const response = await instance.post('/upload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data; // This will be equivalent to AvatarDTO
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export { uploadFile };*/

// fileUploadService.js
export const uploadFile = async (file,folder) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    try {
        const response = await fetch('https://api.h5traveloto.site/v1/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('File upload failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};