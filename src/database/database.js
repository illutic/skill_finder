import { Sequelize } from 'sequelize';
// import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const database = new Sequelize(process.env.DB_URI, {
    logging: false,
    // ^ Comment if you prefer logging
});

// fs.readdir('./database/schemas', (err, files) => {
//     files.forEach((sqlScript) => {
//         database.query(sqlScript, { raw: true });
//     });
// });

export default database;
