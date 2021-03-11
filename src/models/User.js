import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const User = database.define(
    'user',
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
                msg: 'This e-mail address is already in use',
            },
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            defaultValue: 'student',
            allowNull: true,
        },
    },
    { timestamps: false }
);

export default User;
