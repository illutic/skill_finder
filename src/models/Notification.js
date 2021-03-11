import { Sequelize } from 'sequelize';
import database from '../database/database.js';

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
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default Notification;
