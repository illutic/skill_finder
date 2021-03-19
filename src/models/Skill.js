import { Sequelize } from 'sequelize';
import database from '../data-access/database.js';

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
            allowNull: false,
        },
    },
    { timestamps: false }
);

export default Skill;
