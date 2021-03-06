import { Sequelize} from 'sequelize';
import database from '../database/database.js';

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

export default file;