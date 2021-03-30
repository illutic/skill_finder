import { Sequelize } from 'sequelize';
import database from '../data-access/database.js';
import MESSAGE_TYPES from '../constants/message-types.js';

const Message = database.define(
    'Message',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        type: {
            type: Sequelize.ENUM(
                MESSAGE_TYPES.text,
                MESSAGE_TYPES.image,
                MESSAGE_TYPES.file,
                MESSAGE_TYPES.code
            ),
            defaultValue: MESSAGE_TYPES.text,
            allowNull: false,
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        userId: {
            type: Sequelize.UUID,
            allowNull: false,
        },
    },
    { timestamps: true }
);

export default Message;
