import { defaults } from 'pg';
import { Sequelize} from 'sequelize';
import database from '../database/database.js';
import User from './User.js';

const connection = database.define(
    'connection',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        }
    }
)
connection.belongsToMany(User);
export default connection;