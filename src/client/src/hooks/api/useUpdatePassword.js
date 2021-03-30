import { useState } from 'react';
import ENDPOINTS from '../../constants/endpoints';

const useUpdatePassword = () => {
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const updatePassword = async (e) => {
        e.preventDefault();
        const form = e.target;
        const password = form.newPassword.value;
        const confirmPassword = form.oldPassword.value;
        try {
            const response = await fetch(`${ENDPOINTS.user}/password`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password,
                    confirmPassword,
                }),
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            setSuccess('Passowrd has been updated.');
            setError(null);
            form.reset();
        } catch (err) {
            setSuccess(null);
            setError(err);
        }
    };

    return { updatePassword, success, error };
};

export default useUpdatePassword;
