/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { step } from 'mocha-steps';
import faker from 'faker';
import supertest from 'supertest';
import io from 'socket.io-client';
import { Server } from 'socket.io';
import app from '../app.js';
import { WebSockets } from '../sockets/WebSockets.js';
import makeAssociations from '../data-access/associations.js';
import database from '../data-access/database.js';
import MESSAGE_TYPES from '../constants/message-types.js';

const should = chai.should();
chai.use(chaiHttp);
const request = supertest(app);
let cookie;
let wsClient;
let secondUser;
let requests;
let chats;
let httpServer;

describe('Websocket httpServer tests', () => {
    httpServer = app.listen(8082, () => {});
    step('Initialize Database', async () => {
        makeAssociations();
        await database.sync({ force: true });
    });
    before((done) => {
        const ioServer = new Server(httpServer);
        WebSockets(ioServer);
        done();
    });

    describe('WebSocket Client Mock', () => {
        const userPass = faker.internet.password(10, true);
        const mockUser = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: userPass,
            confirmPassword: userPass,
        };
        step('Create a User', async () => {
            await request
                .post('/auth/signup')
                .set('content-type', 'application/json')
                .send(mockUser)
                .then((res) => {
                    res.should.have.status(200);
                    expect(res).to.have.cookie('origin');
                    cookie = res.header['set-cookie'];
                });
        });
        step('Create a 2nd User', async () => {
            const secondUserPass = faker.internet.password(10, true);
            const secondMockUser = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: secondUserPass,
                confirmPassword: secondUserPass,
            };
            await request
                .post('/auth/signup')
                .set('content-type', 'application/json')
                .send(secondMockUser)
                .then((res) => {
                    res.should.have.status(200);
                    expect(res).to.have.cookie('origin');
                    secondUser = res.body;
                });
        });
        step('Log In a User', async () => {
            const loginObj = {
                email: mockUser.email,
                password: mockUser.password,
            };
            await request
                .post('/auth/login')
                .set('Content-Type', 'application/json')
                .send(loginObj)
                .then((res) => {
                    res.should.have.status(200);
                    cookie = res.header['set-cookie'];
                });
        });
        step('Connect Socket', () => {
            const options = {
                transportOptions: {
                    polling: {
                        extraHeaders: {
                            Cookie: cookie,
                        },
                    },
                },
            };
            wsClient = io('http://localhost:8082', options);
        });
        step('PING Test', (done) => {
            wsClient.emit('PING', '');
            wsClient.on('PONG', (data) => {
                expect(data).to.be.eq('PONG');
                done();
            });
        }).timeout(5000);
        step('Authentication Test', (done) => {
            wsClient.emit('authentication');
            wsClient.on('authorized', () => {
                done();
            });
            wsClient.on('unauthorized', () => {});
        });
        step('New Request to Deny', (done) => {
            wsClient.emit('newRequest', secondUser.id);
            wsClient.once('incomingRequest', async () => {
                await request
                    .get(`/api/requests`)
                    .set('Cookie', cookie)
                    .then((res) => {
                        requests = res.body;
                        // console.log(requests);
                        res.should.have.status(200);
                    });
                done();
            });
        });
        step('Deny Request', (done) => {
            wsClient.emit('denyRequest', requests.sentRequests[0].id);
            wsClient.on('deniedRequest', () => {
                done();
            });
        });
        step('New Request to Accept', (done) => {
            wsClient.emit('newRequest', secondUser.id);
            wsClient.once('incomingRequest', async () => {
                await request
                    .get(`/api/requests`)
                    .set('Cookie', cookie)
                    .then((res) => {
                        requests = res.body;
                        res.should.have.status(200);
                        done();
                    });
            });
        });
        step('Accept Request', (done) => {
            wsClient.emit('acceptRequest', requests.sentRequests[0].id);
            wsClient.on('acceptedRequest', async () => {
                await request
                    .get(`/api/chats`)
                    .set('Cookie', cookie)
                    .then((res) => {
                        chats = res.body;
                        res.should.have.status(200);
                        done();
                    });
            });
        });

        step('Join Chatroom', (done) => {
            const chatId = chats.chats[0].id;
            wsClient.emit('joinChat', chatId);
            done();
        });

        step('Send Message', (done) => {
            const chatId = chats.chats[0].id;
            const message = 'TestMessage';
            wsClient.emit('sendMessage', chatId, message, MESSAGE_TYPES.text);
            wsClient.on('message', (socketMessage) => {
                console.log(socketMessage);
                done();
            });
        });
    });
});
