import User from './User.js';
import Skill from './Skill.js';
import Profile from './Profile.js';
import Photo from './Photo.js';
import Request from './Request.js';
import Connection from './Connection.js';
import Notification from './Notification.js';
import Chat from './Chat.js';
import Message from './Message.js';
import File from './File.js';

const makeAssociations = () => {
    // Database Associations

    // User-Skill (M:N)
    User.belongsToMany(Skill, { through: 'UserSkill' });
    Skill.belongsToMany(User, { through: 'UserSkill' });

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
    User.belongsToMany(Connection, { through: 'UserConnection' });
    Connection.belongsToMany(User, { through: 'UserConnection' });

    // User-Notification (1:M)
    User.hasMany(Notification);
    Notification.belongsTo(User);

    // User-Chat (M:N)
    User.belongsToMany(Chat, { through: 'UserChat' });
    Chat.belongsToMany(User, { through: 'UserChat' });

    // Chat-Message (1:M)
    Chat.hasMany(Message);
    Message.belongsTo(Chat);

    // Chat-File (1:M)
    Chat.hasMany(File);
    File.belongsTo(Chat);
};

export default makeAssociations;
