import { Sequelize} from 'sequelize';
import database from '../database/database.js';
import photo from './Photo.js';
import User from './User.js';

const profile = database.define(
    'profile',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
)
profile.belongsTo(User);
profile.hasOne(photo);
export default profile;