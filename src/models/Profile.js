import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const Profile = database.define(
    'Profile',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    { timestamps: false }
);

export default Profile;
