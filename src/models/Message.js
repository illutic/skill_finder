import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const message = database.define(
    'message',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdat: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }
)
export default message;