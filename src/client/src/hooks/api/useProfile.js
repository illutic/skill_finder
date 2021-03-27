import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ENDPOINTS from '../../constants/endpoints';

const useProfile = (id) => {
    const [profileId, setProfileId] = useState(id);
    const [profile, setProfile] = useState();
    const [isProfileLoading, setIsProfileLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const getProfile = async () => {
            try {
                if (!profileId) {
                    return;
                }
                const response = await fetch(`${ENDPOINTS.user}/${profileId}`);
                const profile = await response.json();
                if (response.ok) {
                    setProfile(profile);
                    setIsProfileLoading(false);
                    return;
                }
                setProfile(null);
            } catch (err) {
                console.error(err);
            }
        };
        getProfile();
    }, [profileId, history]);

    return { profile, isProfileLoading, setProfileId };
};

export default useProfile;
