import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import sequelize from './database/database.js';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';
import User from './models/User.js';
import Skill from './models/Skill.js';
import Profile from './models/Profile.js';
import Photo from './models/Photo.js';
import Request from './models/Request.js';
import Connection from './models/Connection.js';
import Notification from './models/Notification.js';
import Chat from './models/Chat.js';
import Message from './models/Message.js';
import File from './models/File.js';

// Constants
const PORT = process.env.PORT ?? 8081;
const DIRNAME = process.env.PWD;
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(DIRNAME, 'client', 'build')));

// Routes
app.use(AuthRoutes);
app.use(APIRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(DIRNAME, 'client', 'build', 'index.html'));
});

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

// Initialisation
(async () => {
    try {
        await sequelize.sync({
            // Force reset the database schema:
            force: true,
            // alter: true,
            // ^ Uncomment whenever you update the schema
            // eg. when creating a new model, updating an old one.
        });
        app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
    } catch (err) {
        console.log(Error(err));
    }
})();
