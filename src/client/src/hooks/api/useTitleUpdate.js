import { useState } from 'react';
import ENDPOINTS from '../../constants/endpoints';

const useTitleUpdate = () => {
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const updateTitle = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.newTitle.value;
        try {
            const response = await fetch(ENDPOINTS.title, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                }),
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            setSuccess('Title updated.');
            setError(null);
            form.reset();
        } catch (err) {
            setSuccess(null);
            setError(err);
        }
    };

    return { updateTitle, success, error };
};

export default useTitleUpdate;
