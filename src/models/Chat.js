import { Sequelize } from 'sequelize';
import database from '../data-access/database.js';

const Chat = database.define(
    'Chat',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);

export default Chat;
