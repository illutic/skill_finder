import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = new Sequelize(process.env.DB_URI, {
    logging: console.log,
});

export default database;
