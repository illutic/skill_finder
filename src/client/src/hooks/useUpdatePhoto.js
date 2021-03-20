import { useState } from 'react';
import ENDPOINTS from '../constants/endpoints';

const useUpdatePhoto = () => {
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
            setError('');
        } catch (err) {
            setError(err.error);
        }
    };

    return { updatePhoto, error };
};

export default useUpdatePhoto;
