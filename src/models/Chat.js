import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const chat = database.define(
    'chat',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
    }
)

export default chat;