import { Sequelize} from 'sequelize';
import Chat from './Chat.js';
import Connection from './Connection.js';
import Message from './Message.js';
import Notification from './Notification.js';
import Photo from './Photo.js';
import Profile from './Profile.js';
import Request from './Request.js';
import Skill from './Skill.js';
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

User.hasMany(Request);
User.hasMany(Connection);
User.hasMany(Chat);
User.hasMany(Request);
User.hasMany(Skill);

User.hasOne(Profile);
export default User;
