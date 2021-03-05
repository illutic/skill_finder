import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const profile = database.define(
    'profile',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
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

export default profile;