import io from 'socket.io-client';

export const initialize = (chatId) => {
    const socket = io({
        autoConnect: false,
    });
    socket.connect();
    socket.on('connect', () => {
        socket.emit('authentication');

        socket.on('unauthorized', (reason) => {
            alert('Unauthorized:', reason);
            disconnect(socket);
        });
        socket.on('authorized', () => {
            socket.emit('join', chatId);
        });
    });
    return socket;
};

export const disconnect = (socket) => {
    socket.disconnect();
    socket.off();
};
