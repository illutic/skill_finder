import { useState, useCallback } from 'react';
import useLocationId from '../other/useLocationId';
import useChat from './useChat';
import ENDPOINTS from '../../constants/endpoints';

const useChatUpload = () => {
    const { locationId: chatId } = useLocationId();
    const { sendFile } = useChat(chatId);
    const [filePayload, setFilePayload] = useState();

    const uploadFile = useCallback(async () => {
        if (!chatId || !filePayload) {
            return;
        }
        const formData = new FormData();
        formData.append('chatId', chatId);
        formData.append('file', filePayload);
        const response = await fetch(`${ENDPOINTS.files}`, {
            method: 'POST',
            body: formData,
        });
        const payload = await response.json();
        if (response.ok) {
            sendFile(filePayload, payload.uri);
        }
    }, [chatId, filePayload, sendFile]);

    return { uploadFile, setFilePayload };
};

export default useChatUpload;
