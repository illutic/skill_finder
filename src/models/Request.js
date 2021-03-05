import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const request = database.define(
    'request',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        from: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        to: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
)

export default request;