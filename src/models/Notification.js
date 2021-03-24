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
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        // We need type attribute to apply different logic
        // on the client-side, based on the notification type.
        type: {
            type: Sequelize.ENUM(
                NOTIFICATION_TYPES.incomingRequest,
                NOTIFICATION_TYPES.acceptedRequest
            ),
            allowNull: false,
        },
        // We can use the payload to pass useful data
        // along with the notification e.g. a requestId.
        // It will save us a lot of effort on the client-side.
        // JSON allows us for extra flexibility.
        payload: {
            type: Sequelize.JSON,
            allowNull: true,
        },
    },
    { timestamps: true }
);

export default Notification;
