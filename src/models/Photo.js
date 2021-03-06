import { Sequelize} from 'sequelize';
import database from '../database/database.js';
import profile from './Profile.js';

const photo = database.define(
    'photo',
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
photo.belongsTo(profile);
export default photo;