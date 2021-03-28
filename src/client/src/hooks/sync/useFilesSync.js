import { useContext, useCallback } from 'react';
import { FilesContext } from '../../contexts/FilesContextProvider';
import ENDPOINTS from '../../constants/endpoints.js';

const useFilesSync = () => {
    const { setFiles } = useContext(FilesContext);

    const syncFiles = useCallback(
        async (chatId) => {
            console.log(chatId);
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
        },
        [setFiles]
    );

    return syncFiles;
};

export default useFilesSync;
