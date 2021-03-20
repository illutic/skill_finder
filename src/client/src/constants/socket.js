import io from 'socket.io-client';

export let socket;

export const connect = () => {
    let error = null;
    socket = io({
        autoConnect: false,
    });

    socket.on('connect', () => {
        socket.emit('authentication');
        socket.on('unauthorized', (reason) => {
            console.log('Unauthorized:', reason);
            error = reason.message;
            socket.disconnect();
        });
        socket.on('authorized', () => {
            socket.emit('join', 'chatId');
            console.log('Connected');
        });
    });
    socket.on('disconnect', (reason) => {
        console.log(`Disconnected: ${error || reason}`);
        error = null;
    });
};

export const disconnect = () => {
    socket.disconnect();
};
