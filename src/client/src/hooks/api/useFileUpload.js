import { useState, useContext, useCallback } from 'react';
import useLocationId from '../other/useLocationId';
import useFilesSync from '../sync/useFilesSync';
import ENDPOINTS from '../../constants/endpoints';
import { SocketContext } from '../../contexts/SocketContextProvider';
import { htmlFileEncoder } from '../../helpers/htmlEncoder';

const useFileUpload = () => {
    const { locationId: chatId } = useLocationId();
    const syncFiles = useFilesSync();
    const [filePayload, setFilePayload] = useState();
    const { socket } = useContext(SocketContext);

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
        if (!response.ok) {
            throw payload.error;
        }
        const fileType = filePayload.name.split('.').pop();
        let htmlMarkup = htmlFileEncoder(fileType, filePayload, payload);
        socket.emit('sendMessage', chatId, htmlMarkup);
        syncFiles(chatId);
    }, [chatId, filePayload, socket, syncFiles]);

    return { uploadFile, setFilePayload };
};

export default useFileUpload;
