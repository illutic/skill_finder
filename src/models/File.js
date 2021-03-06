import { Sequelize} from 'sequelize';
import database from '../database/database.js';
import chat from './Chat.js';

const file = database.define(
    'file',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        uri: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)
file.belongsTo(chat);
export default file;