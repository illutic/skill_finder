import { useState } from 'react';
import ENDPOINTS from '../../constants/endpoints';

const useUpdateDescription = () => {
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const updateDescription = async (e) => {
        e.preventDefault();
        const form = e.target;
        const description = form.newDescription.value;
        try {
            const response = await fetch(ENDPOINTS.description, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description,
                }),
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            setSuccess('Description has been updated.');
            setError(null);
            form.reset();
        } catch (err) {
            setSuccess(null);
            setError(err);
        }
    };

    return { updateDescription, success, error };
};

export default useUpdateDescription;
