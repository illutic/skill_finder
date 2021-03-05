import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const User = database.define(
    'User',
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
                msg: 'This e-mail address is already in use',
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Please provide a valid e-mail address',
                },
            },
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default User;
