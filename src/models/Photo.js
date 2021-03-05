import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const photo = database.define(
    'photo',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        uri: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

export default photo;