import { useCallback } from 'react';
import ENDPOINTS from '../../constants/endpoints.js';

const useFilesDownload = () => {
    const downloadFile = useCallback(async (fileUri, fileName) => {
        if (!fileUri) {
            return;
        }
        const response = await fetch(`${ENDPOINTS.api}/${fileUri}`);
        // <https://roytuts.com/download-file-from-server-using-react/>
        response.blob().then((blob) => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.click();
        });
    }, []);

    return { downloadFile };
};
export default useFilesDownload;
