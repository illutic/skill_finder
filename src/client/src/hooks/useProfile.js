import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ENDPOINTS from '../constants/endpoints';

const useProfile = () => {
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
                // < Set error and redirect to 404 >
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [userId]);

    return { profile, isLoading };
};

export default useProfile;
