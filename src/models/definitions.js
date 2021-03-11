import { Sequelize } from 'sequelize';
import database from '../database/database.js';

// DEFINITIONS
export const Chat = database.define(
    'chat',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: true }
);

export const Connection = database.define(
    'connection',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);

export const File = database.define(
    'file',
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
    },
    { timestamps: false }
);

export const Message = database.define(
    'message',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export const Notification = database.define(
    'notification',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export const Photo = database.define(
    'photo',
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
    },
    { timestamps: false }
);

export const Profile = database.define(
    'profile',
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

export const Request = database.define(
    'request',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        fromId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        toId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
    },
    { timestamps: false }
);

export const Skill = database.define(
    'skill',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        skillName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    { timestamps: false }
);

export const User = database.define(
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
            defaultValue: 'student',
            allowNull: true,
        },
    },
    { timestamps: false }
);

// M:N Tables
export const UserSkill = database.define(
    'userSkill',
    {
        userId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
        skillId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);
export const UserConnection = database.define(
    'userConnection',
    {
        userId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
        connectionId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);
export const UserNotification = database.define(
    'userNotification',
    {
        userId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
        notificationId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);
export const UserRequest = database.define(
    'userRequest',
    {
        userId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
        notificationId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);
export const UserChat = database.define(
    'userChat',
    {
        userId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
        connectionId: {
            type: Sequelize.UUIDV4,
            primaryKey: true,
        },
    },
    { timestamps: false }
);

// ASSOCIATIONS
Chat.hasMany(File, { timestamps: false });
File.belongsTo(Chat, { timestamps: false });

Chat.hasMany(Message, { timestamps: false });
Message.belongsTo(Chat, { timestamps: false });

// User.hasMany(request);
Request.belongsTo(User, { timestamps: false });

// User.hasMany(connection);
Connection.belongsToMany(User, {
    through: 'userConnections',
    timestamps: false,
});

// User.hasMany(chat);
Chat.belongsToMany(User, { through: 'userChats', timestamps: false });

// User.hasMany(request);
Request.belongsToMany(User, { through: 'userRequests', timestamps: false });

// User.hasMany(skill);
Skill.belongsToMany(User, { through: 'userSkills', timestamps: false });

User.hasOne(Profile, { timestamps: false });
Profile.belongsTo(User, { timestamps: false });

Profile.hasOne(Photo, { timestamps: false });
Photo.belongsTo(Profile, { timestamps: false });

// User.hasMany(notification);
Notification.belongsToMany(User, {
    through: 'userNotifications',
    timestamps: false,
});
