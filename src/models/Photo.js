import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const Photo = database.define(
    'photo',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        uri: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default Photo;
