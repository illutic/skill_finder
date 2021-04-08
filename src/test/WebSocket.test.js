/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import io from 'socket.io-client';
import { Server } from 'socket.io';
import WebSockets from '../sockets/WebSockets.js';
import httpServer from '../server.js';

// const should = chai.should();
describe('Websocket httpServer tests', () => {
    before((done) => {
        const ioServer = new Server(httpServer);
        WebSockets(ioServer);
        done();
    });

    describe('WebSocket Client Mock', () => {
        const wsClient = io('http://localhost:8081');
        wsClient.on('connection', () => console.log('Client connected'));
        it('PING Test', (done) => {
            wsClient.emit('PING', '');
            wsClient.on('PONG', (data) => {
                if (data === 'PONG') {
                    done();
                }
            });
        }).timeout(5000);
        it('Authentication Test', (done) => {
            wsClient.emit('authentication');
            done();
        });
        // Get Cookie and send it with socket
    });
});
