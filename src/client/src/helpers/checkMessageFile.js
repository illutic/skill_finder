import MESSAGE_TYPES from '../constants/messageTypes';

const checkFileType = (file) => {
    const fileType = file.name.split('.').pop();
    if (fileType.match(/(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        return MESSAGE_TYPES.image;
    }
    return MESSAGE_TYPES.file;
};

export default checkFileType;
