import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const User = database.define(
    'user',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
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
                msg: 'This email address is already taken.',
            },
        },
        password: {
            type: Sequelize.STRING(64),
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default User;
