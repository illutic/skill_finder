import { useState } from 'react';
import useFilesFor from '../api/useFiles';
import ENDPOINTS from '../../constants/endpoints';

const useFileUpload = () => {
    const { setFilesFor } = useFilesFor();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [filePayload, setFilePayload] = useState();

    const uploadFile = async () => {
        const chatId = window.location.href.split(`/`).pop();
        if (!chatId || !filePayload) {
            return;
        }
        const formData = new FormData();
        formData.append('chatId', chatId);
        formData.append('file', filePayload);
        try {
            const response = await fetch(`${ENDPOINTS.files}`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            setFilesFor();
            setSuccess('File uploaded.');
            setError(null);
        } catch (err) {
            setSuccess(null);
            setError(err);
        }
    };

    return { uploadFile, success, error, setFilePayload };
};

export default useFileUpload;
