import { Sequelize } from 'sequelize';
import database from '../database/database.js';

const Skill = database.define(
    'Skill',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    { timestamps: false }
);

export default Skill;
