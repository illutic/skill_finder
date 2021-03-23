import ENDPOINTS from '../constants/endpoints.js';

export const request = (userId) => {
    fetch(ENDPOINTS.request + '/new', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            toId: userId,
        }),
    });
};
