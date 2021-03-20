import { useState } from 'react';
import ENDPOINTS from '../constants/endpoints';

const useUpdatePhoto = () => {
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
                const err = await response.json();
                throw err;
            }
            form.reset();
            setSuccess('Image updated.');
            setError('');
        } catch (err) {
            setSuccess('');
            setError(err.error);
        }
    };

    return { updatePhoto, success, error };
};

export default useUpdatePhoto;