/* eslint-disable no-console */
import { Sequelize } from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import fs from 'node:fs';
import dotenv from 'dotenv';

dotenv.config();
const database = new Sequelize(process.env.DB_URI, {
    logging: console.log,
});

// imports sql files
fs.readdir('./database/schemas', (err, files) => {
    files.forEach((sqlScript) => {
        database.query(sqlScript, { raw: true });
    });
});
export default database;
