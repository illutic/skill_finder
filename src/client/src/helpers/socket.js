export const initialize = (socket, chatId) => {
    socket.connect();
    socket.on('connect', () => {
        socket.emit('authentication');
    });
    socket.on('unauthorized', () => {
        socket.disconnect();
    });
    return socket;
};
