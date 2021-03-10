import { Sequelize } from 'sequelize';
import database from '../database/database.js';

// DEFINITIONS
const chat = database.define(
    'chat',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
    },
    { timestamps: false }
);

const connection = database.define(
    'connection',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
    },
    { timestamps: false }
);

const file = database.define(
    'file',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        uri: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

const message = database.define(
    'message',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdat: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    { timestamps: false }
);

const notification = database.define(
    'notification',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdat: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    { timestamps: false }
);

const photo = database.define(
    'photo',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        uri: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

const profile = database.define(
    'profile',
    {
        id: {
            type: Sequelize.UUID,
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

const request = database.define(
    'request',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        fromid: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        toid: {
            type: Sequelize.UUID,
            allowNull: false,
        },
    },
    { timestamps: false }
);

const skill = database.define(
    'skill',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        skillname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    { timestamps: false }
);

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

// ASSOCIATIONS
chat.hasMany(file);
file.belongsTo(chat);

chat.hasMany(message);
message.belongsTo(chat);

User.hasMany(request);
request.belongsTo(User);

User.hasMany(connection);
connection.belongsToMany(User, { through: 'userConnections' });

User.hasMany(chat);
chat.belongsToMany(User, { through: 'userChats' });

User.hasMany(request);
request.belongsToMany(User, { through: 'userRequests' });

User.hasMany(skill);
skill.belongsToMany(User, { through: 'userSkills' });

User.hasOne(profile);
profile.belongsTo(User);

profile.hasOne(photo);
photo.belongsTo(profile);

User.hasMany(notification);
notification.belongsToMany(User, { through: 'userNotifications' });

export default {
    chat,
    connection,
    file,
    message,
    notification,
    photo,
    profile,
    request,
    skill,
    User,
};
