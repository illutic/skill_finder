import { useState, useEffect } from 'react';
import ENDPOINTS from '../../constants/endpoints';

const useVerifiedUsers = () => {
    const [verifiedUsers, setVerifiedUsers] = useState();

    useEffect(() => {
        const getVerifiedUsers = async () => {
            const response = await fetch(ENDPOINTS.verified);
            const users = await response.json();
            if (response.ok) {
                setVerifiedUsers(users);
                return;
            }
            setVerifiedUsers(null);
        };
        getVerifiedUsers();
    }, []);

    return { verifiedUsers };
};

export default useVerifiedUsers;
