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
