export const initialize = (socket, chatId) => {
    socket.connect();
    socket.on('connect', () => {
        socket.emit('authentication');
    });

    socket.on('unauthorized', (reason) => {
        alert('Unauthorized:', reason);
        leaveChat(socket, chatId);
        socket.disconnect();
    });
    return socket;
};

export const joinChat = (socket, chatId) => {
    if (chatId) {
        socket.emit('join', chatId);
    }
};
export const leaveChat = (socket, chatId) => {
    if (chatId) {
        socket.emit('leaveRoom', chatId);
    }
};
