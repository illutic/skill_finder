import ENDPOINTS from '../constants/endpoints';

const sendRequest = async (userId) => {
    fetch(ENDPOINTS.request + '/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            toId: userId,
        }),
    });
};

export default sendRequest;
