import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const User = database.define(
    'user',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
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
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        skills: {
            type: Sequelize.JSON,
            allowNull: true,
        },
        usertype: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        achievements: {
            type: Sequelize.JSON,
            allowNull: true,
        },
    },
    { timestamps: false }
);

export default User;
