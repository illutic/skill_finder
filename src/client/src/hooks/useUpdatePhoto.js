import { useState } from 'react';
import useUserSync from './useUserSync';
import ENDPOINTS from '../constants/endpoints';

const useUpdatePhoto = () => {
    const syncUser = useUserSync();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const updatePhoto = async (e, type) => {
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
            setSuccess('Image updated.');
            setError(null);
            form.reset();
        } catch (err) {
            setSuccess(null);
            setError(err);
        }
    };

    return { updatePhoto, success, error };
};

export default useUpdatePhoto;
