import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const Request = database.define(
    'Request',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        fromId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        toId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default Request;
