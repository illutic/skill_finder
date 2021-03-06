import { Sequelize} from 'sequelize';
import database from '../database/database.js';
import file from './File.js';
import message from './Message.js';

const chat = database.define(
    'chat',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
    }
)

chat.hasMany(file);
chat.hasMany(message);
export default chat;