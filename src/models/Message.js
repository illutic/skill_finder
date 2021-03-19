import { Sequelize } from 'sequelize';
import database from '../data-access/database.js';

const Message = database.define(
    'Message',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);

export default Message;
