import { useContext, useState } from 'react';
import useFilesFor from '../api/useFiles';
import ENDPOINTS from '../../constants/endpoints';
import { SocketContext } from '../../contexts/SocketContextProvider';
import { htmlFileEncoder } from '../../helpers/htmlEncoder';

const useFileUpload = () => {
    const { setFilesFor } = useFilesFor();
    const [filePayload, setFilePayload] = useState();

    const { socket } = useContext(SocketContext);

    const uploadFile = async () => {
        try {
            if (!filePayload) {
                return;
            }
            const chatId = window.location.href.split(`/`).pop();
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
            /** Embeded files */
            const fileType = filePayload.name.split('.').pop();
            let htmlMarkup = htmlFileEncoder(fileType, filePayload, payload);
            socket.emit('sendMessage', chatId, htmlMarkup);

            setFilesFor();
        } catch (err) {
            console.log(err);
        }
    };

    return { uploadFile, setFilePayload };
};

export default useFileUpload;
