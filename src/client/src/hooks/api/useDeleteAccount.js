import { useState } from 'react';
import useLogout from '../auth/useLogout';
import ENDPOINTS from '../../constants/endpoints';

const useDeleteAccount = () => {
    const logOut = useLogout();
    const [error, setError] = useState();

    const deleteAccount = async (e) => {
        e.preventDefault();
        const form = e.target;
        const confirmPhrase = form.confirmPhrase.value;
        const confirmPassword = form['confirmPassword-2'].value;
        try {
            const response = await fetch(`${ENDPOINTS.user}/account`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    confirmPhrase,
                    confirmPassword,
                }),
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            setError(null);
            logOut();
        } catch (err) {
            setError(err);
        }
    };

    return { deleteAccount, error };
};

export default useDeleteAccount;
