import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const skill = database.define(
    'skill',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        skillname: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
)

export default skill;