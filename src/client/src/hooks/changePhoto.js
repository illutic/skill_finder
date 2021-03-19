import react, { useEffect, useState } from 'react';
import ENDPOINTS from '../constants/endpoints';

export const ChangePhoto = (formData, photoType) => {
    const requestOptions = {
        method: 'POST',
        body: formData,
    };
    fetch(ENDPOINTS.photo + photoType, requestOptions);
};
