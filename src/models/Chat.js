import { Sequelize} from 'sequelize';
import database from '../database/database.js';


const chat = database.define(
    'chat',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
    }
)

export default chat;