import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const User = database.define(
    'user',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
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
        usertype: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    { timestamps: false }
);

export default User;
