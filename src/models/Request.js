import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const request = database.define(
    'request',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        fromid: {
            type: Sequelize.UUID,
            allowNull: false
        },
        toid: {
            type: Sequelize.UUID,
            allowNull: false
        }
    }
)
export default request;