import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextProvider';
import extractFormData from '../utils/extractFormData';
import FORM_TYPES from '../constants/formTypes';
import ENDPOINTS from '../constants/endpoints';

const useOriginAuth = (type) => {
    const history = useHistory();
    const [error, setError] = useState();
    const { setIsAuth } = useContext(AuthContext);

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
            setIsAuth(true);
            history.push('/');
        } catch (err) {
            setError(err.error);
        }
    };

    return { originAuth, error };
};

export default useOriginAuth;
