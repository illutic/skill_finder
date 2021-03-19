import { Sequelize } from 'sequelize';
import PHOTO_TYPES from '../constants/photo-types.js';
import database from '../data-access/database.js';

const Photo = database.define(
    'Photo',
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
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default Photo;
