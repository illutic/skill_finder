import ENDPOINTS from '../constants/endpoints';

export const ChangePhoto = async (formData, photoType) => {
    const requestOptions = {
        method: 'POST',
        body: formData,
    };
    return await fetch(ENDPOINTS.photo + photoType, requestOptions);
};
