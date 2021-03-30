import { useState } from 'react';
import ENDPOINTS from '../../constants/endpoints';

const useUpdateEmail = () => {
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const updateEmail = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.newEmail.value;
        const password = form['confirmPassword-1'].value;
        try {
            const response = await fetch(`${ENDPOINTS.user}/email`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            setSuccess('Email has been updated.');
            setError(null);
            form.reset();
        } catch (err) {
            setSuccess(null);
            setError(err);
        }
    };

    return { updateEmail, success, error };
};

export default useUpdateEmail;
