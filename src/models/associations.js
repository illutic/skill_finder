import File from './File.js';
import Chat from './Chat.js';
import Connection from './Connection.js';
import Message from './Message.js';
import Notification from './Notification.js';
import Photo from './Photo.js';
import Profile from './Profile.js';
import Request from './Request.js';
import Skill from './Skill.js';

Chat.hasMany(file);
Chat.hasMany(message);
User.hasMany(Request);
User.hasMany(Connection);
User.hasMany(Chat);
User.hasMany(Request);
User.hasMany(Skill);

User.hasOne(Profile);
Profile.hasOne(photo);

File.belongsTo(chat);
Message.belongsTo(chat);
Photo.belongsTo(profile);
Profile.belongsTo(User);
Request.belongsTo(User);

Skill.belongsToMany(User);
Notification.belongsToMany(User);
Connection.belongsToMany(User);

export {File, Chat, Connection, Message, Notification, Photo, Profile, Request, Skill};