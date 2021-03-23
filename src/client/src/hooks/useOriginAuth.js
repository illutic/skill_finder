import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthCheck from '../hooks/useAuthCheck';
import useUserSync from '../hooks/useUserSync';
import extractFormData from '../utils/extractFormData';
import FORM_TYPES from '../constants/formTypes';
import ENDPOINTS from '../constants/endpoints';

const useOriginAuth = (type) => {
    const history = useHistory();
    const checkAuth = useAuthCheck();
    const syncUser = useUserSync();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const originAuth = async (e) => {
        e.preventDefault();
        const formData = extractFormData(e.target);
        const endpoint =
            type === FORM_TYPES.signup ? ENDPOINTS.signup : ENDPOINTS.login;
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const err = await response.json();
                throw err;
            }
            setError(null);
            setSuccess('Success! Redirecting...');
            checkAuth();
            syncUser();
            history.push('/');
        } catch (err) {
            setError(err.error);
        }
    };

    return { originAuth, success, error };
};

export default useOriginAuth;
