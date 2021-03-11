import User from '../models/User.js';
import Skill from '../models/Skill.js';
import Profile from '../models/Profile.js';
import Photo from '../models/Photo.js';
import Request from '../models/Request.js';
import Connection from '../models/Connection.js';
import Notification from '../models/Notification.js';
import Chat from '../models/Chat.js';
import Message from '../models/Message.js';
import File from '../models/File.js';

const makeAssociations = () => {
    // User-Skill (M:N)
    User.belongsToMany(Skill, { through: 'UserSkill', timestamps: false });
    Skill.belongsToMany(User, { through: 'UserSkill', timestamps: false });

    // User-Profile (1:1)
    User.hasOne(Profile);
    Profile.belongsTo(User);

    // Profile-Photo (1:1)
    Profile.hasOne(Photo);
    Photo.belongsTo(Profile);

    // User-Request (1:M)
    User.hasMany(Request);
    Request.belongsTo(User);

    // User-Connection (M:N)
    User.belongsToMany(Connection, {
        through: 'UserConnection',
        timestamps: false,
    });
    Connection.belongsToMany(User, {
        through: 'UserConnection',
        timestamps: false,
    });

    // User-Notification (1:M)
    User.hasMany(Notification);
    Notification.belongsTo(User);

    // User-Chat (M:N)
    User.belongsToMany(Chat, { through: 'UserChat', timestamps: false });
    Chat.belongsToMany(User, { through: 'UserChat', timestamps: false });

    // Chat-Message (1:M)
    Chat.hasMany(Message);
    Message.belongsTo(Chat);

    // Chat-File (1:M)
    Chat.hasMany(File);
    File.belongsTo(Chat);
};

export default makeAssociations;
