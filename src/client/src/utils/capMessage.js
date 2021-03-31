const capMessage = (message) => {
    let cappedMessage = message;
    if (cappedMessage.length > 255) {
        cappedMessage = cappedMessage.substring(0, 255);
    }
    return cappedMessage;
};

export default capMessage;
