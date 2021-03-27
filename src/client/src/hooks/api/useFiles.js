import { useState, useEffect } from 'react';
import ENDPOINTS from '../../constants/endpoints.js';

const useFiles = (chatId) => {
    const [filesFor, setFilesFor] = useState(chatId);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const getFiles = async () => {
            if (!filesFor) {
                return;
            }
            const response = await fetch(
                `${ENDPOINTS.files}/getAll/${filesFor}`
            );
            const data = await response.json();
            if (response.ok) {
                setFiles(data);
                return;
            }
            setFiles(null);
        };
        getFiles();
    }, [filesFor]);

    return { files, setFilesFor };
};
export default useFiles;
