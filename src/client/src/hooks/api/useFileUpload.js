import { useState } from 'react';
import useLocationId from '../other/useLocationId';
import useFilesSync from '../sync/useFilesSync';
import ENDPOINTS from '../../constants/endpoints';

const useFileUpload = () => {
    const { locationId: chatId } = useLocationId();
    const syncFiles = useFilesSync();
    const [filePayload, setFilePayload] = useState();

    const uploadFile = async () => {
        if (!chatId || !filePayload) {
            return;
        }
        const formData = new FormData();
        formData.append('chatId', chatId);
        formData.append('file', filePayload);
        // HTTP -> WS
        const response = await fetch(`${ENDPOINTS.files}`, {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            syncFiles(chatId);
        }
    };

    return { uploadFile, setFilePayload };
};

export default useFileUpload;
