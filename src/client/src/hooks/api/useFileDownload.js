import { useCallback } from 'react';
import ENDPOINTS from '../../constants/endpoints.js';

const useFileDownload = () => {
    // <https://roytuts.com/download-file-from-server-using-react/>
    const downloadFile = useCallback(async (fileUri, fileName) => {
        if (!fileUri) {
            return;
        }
        const response = await fetch(`${ENDPOINTS.api}/${fileUri}`);
        const blob = await response.blob();
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    }, []);

    return { downloadFile };
};
export default useFileDownload;
