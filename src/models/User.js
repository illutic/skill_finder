import { Sequelize } from 'sequelize';
import database from '../data-access/database.js';
import USER_TYPES from '../constants/user-types.js';

const User = database.define(
    'User',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'This e-mail address is already in use.',
            },
        },
        password: {
            type: Sequelize.STRING(64),
            allowNull: true,
            // ^ Set to true for Google users
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        type: {
            type: Sequelize.STRING,
            defaultValue: USER_TYPES.student,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default User;
