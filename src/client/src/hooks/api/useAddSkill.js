import { useState } from 'react';
import ENDPOINTS from '../../constants/endpoints';
import useUserSync from '../sync/useUserSync';

const useAddSkill = () => {
    const [error, setError] = useState();
    const syncUser = useUserSync();

    const addSkill = async (e) => {
        e.preventDefault();
        const form = e.target;
        const skill = form.newSkill.value;
        try {
            const response = await fetch(ENDPOINTS.skill, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: skill,
                }),
            });
            if (!response.ok) {
                const payload = await response.json();
                throw payload.error;
            }
            setError(null);
            form.reset();
            syncUser();
        } catch (err) {
            setError(err);
        }
    };

    return { addSkill, error };
};

export default useAddSkill;
