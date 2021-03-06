import { Sequelize} from 'sequelize';
import database from '../database/database.js';

const skill = database.define(
    'skill',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        skillname: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
)
export default skill;