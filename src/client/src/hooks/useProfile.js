import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ENDPOINTS from '../constants/endpoints';

const useProfile = () => {
    const history = useHistory();
    const location = useLocation();
    const [userId, setUserId] = useState();
    const [profile, setProfile] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const userId = location.pathname.split('/').pop();
        setUserId(userId);
    }, [location.pathname]);

    useEffect(() => {
        const getUser = async () => {
            try {
                if (!userId) {
                    return;
                }
                const response = await fetch(`${ENDPOINTS.user}/${userId}`);
                const profile = await response.json();
                if (response.ok) {
                    setProfile(profile);
                    setIsLoading(false);
                    return;
                }
                setProfile(null);
                history.push('/404');
            } catch (err) {
                console.error(err);
            }
        };
        getUser();
    }, [userId, history]);

    return { profile, isLoading };
};

export default useProfile;
