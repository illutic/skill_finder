import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ENDPOINTS from '../constants/endpoints';

const useProfile = () => {
    const location = useLocation();
    const [userId, setUserId] = useState();
    const [data, setData] = useState();
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
                const data = await response.json();
                if (response.ok) {
                    setData(data);
                    setIsLoading(false);
                    return;
                }
                setData(null);
                // < Set error and redirect to 404 >
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [userId]);

    return { data, isLoading };
};

export default useProfile;
