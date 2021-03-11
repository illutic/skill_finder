import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const Connection = database.define(
    'connection',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);

export default Connection;
