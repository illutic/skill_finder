import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import extractFormData from '../utils/extractFormData';
import compose from '../utils/compose';
import FORM_TYPES from '../constants/formTypes';
import ENDPOINTS from '../constants/endpoints';

const withAuthHandler = (Component) => {
    return ({ type, history, ...rest }) => {
        const [error, setError] = useState('');

        const authHandler = async (e) => {
            e.preventDefault();
            const formData = extractFormData(e.target);
            const endpoint =
                type === FORM_TYPES.signup ? ENDPOINTS.signup : ENDPOINTS.login;
            try {
                // >>> useAuth
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
                // <<< useAuth
                history.push('/');
            } catch (err) {
                setError(err.error);
            }
        };

        return (
            <Component
                type={type}
                error={error}
                onSubmit={(e) => authHandler(e)}
                {...rest}
            />
        );
    };
};

export default compose(withRouter, withAuthHandler);
