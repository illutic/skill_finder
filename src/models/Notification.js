import { Sequelize } from 'sequelize';
import database from '../data-access/database.js';
import NOTIFICATION_TYPES from '../constants/notification-types.js';

const Notification = database.define(
    'Notification',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        type: {
            type: Sequelize.ENUM(
                NOTIFICATION_TYPES.incomingRequest,
                NOTIFICATION_TYPES.acceptedRequest
            ),
            allowNull: false,
        },
        content: {
            type: Sequelize.JSON,
            allowNull: true,
        },
    },
    { timestamps: true }
);

export default Notification;
