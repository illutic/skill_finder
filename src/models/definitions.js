// import { Sequelize } from 'sequelize';
// import database from '../database/database.js';

// M:N Tables
// export const UserSkill = database.define(
//     'userSkill',
//     {
//         userId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//         skillId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//     },
//     { timestamps: false }
// );
// export const UserConnection = database.define(
//     'userConnection',
//     {
//         userId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//         connectionId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//     },
//     { timestamps: false }
// );
// export const UserNotification = database.define(
//     'userNotification',
//     {
//         userId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//         notificationId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//     },
//     { timestamps: false }
// );
// export const UserRequest = database.define(
//     'userRequest',
//     {
//         userId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//         notificationId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//     },
//     { timestamps: false }
// );
// export const UserChat = database.define(
//     'userChat',
//     {
//         userId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//         connectionId: {
//             type: Sequelize.UUIDV4,
//             primaryKey: true,
//         },
//     },
//     { timestamps: false }
// );

// ASSOCIATIONS
// Chat.hasMany(File, { timestamps: false });
// File.belongsTo(Chat, { timestamps: false });

// Chat.hasMany(Message, { timestamps: false });
// Message.belongsTo(Chat, { timestamps: false });

// // User.hasMany(request);
// Request.belongsTo(User, { timestamps: false });

// // User.hasMany(connection);
// Connection.belongsToMany(User, {
//     through: 'userConnections',
//     timestamps: false,
// });

// // User.hasMany(chat);
// Chat.belongsToMany(User, { through: 'userChats', timestamps: false });

// // User.hasMany(request);
// Request.belongsToMany(User, { through: 'userRequests', timestamps: false });

// // User.hasMany(skill);
// Skill.belongsToMany(User, { through: 'userSkills', timestamps: false });

// User.hasOne(Profile, { timestamps: false });
// Profile.belongsTo(User, { timestamps: false });

// Profile.hasOne(Photo, { timestamps: false });
// Photo.belongsTo(Profile, { timestamps: false });

// // User.hasMany(notification);
// Notification.belongsToMany(User, {
//     through: 'userNotifications',
//     timestamps: false,
// });
