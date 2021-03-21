import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLocationId = () => {
    const location = useLocation();
    const [locationId, setLocationId] = useState();

    useEffect(() => {
        const uuidRegExp = new RegExp(
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        );
        const locationId = location.pathname.split('/').pop();
        if (uuidRegExp.test(locationId)) {
            setLocationId(locationId);
            return;
        }
        setLocationId(null);
    }, [location]);

    return { locationId };
};

export default useLocationId;
