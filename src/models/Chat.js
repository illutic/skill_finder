import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const Chat = database.define(
    'Chat',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: true }
);

export default Chat;
