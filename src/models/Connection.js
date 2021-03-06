import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const connection = database.define(
    'connection',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        }
    }
)

export default connection;