import { useState, useEffect, useCallback } from 'react';
import ENDPOINTS from '../../constants/endpoints.js';

const useFilesSync = () => {
    const [files, setFiles] = useState([]);
    const [chatId, setChatId] = useState();

    const syncFiles = useCallback(async () => {
        if (!chatId) {
            return;
        }
        const response = await fetch(`${ENDPOINTS.files}/getAll/${chatId}`);
        const data = await response.json();
        if (response.ok) {
            setFiles(data);
            return;
        }
        setFiles(null);
    }, [chatId]);

    useEffect(() => {
        const locationChatId = window.location.href.split(`/`).pop();
        setChatId(locationChatId);
        syncFiles();
    }, [syncFiles]);

    return { files, syncFiles };
};
export default useFilesSync;
