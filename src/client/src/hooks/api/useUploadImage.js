import { useState } from 'react';
import useUserSync from '../sync/useUserSync';
import ENDPOINTS from '../../constants/endpoints';

const useUploadImage = () => {
    const syncUser = useUserSync();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const uploadImage = async (e, type) => {
        e.preventDefault();
        const form = e.target;
        const file = form.image.files[0];
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = await fetch(`${ENDPOINTS.photo}/${type}`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            syncUser();
            setSuccess('Image has been updated.');
            setError(null);
            form.reset();
        } catch (err) {
            setSuccess(null);
            setError(err);
        }
    };

    return { uploadImage, success, error };
};

export default useUploadImage;
