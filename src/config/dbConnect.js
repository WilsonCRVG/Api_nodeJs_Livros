import mongoose from "mongoose"

import dotenv from 'dotenv';
dotenv.config();

const dbConfig = process.env.DB_CONFIG;
//const user = process.env.DB_USER;
//const password = process.env.DB_PASSWORD

mongoose.connect(dbConfig);

let db = mongoose.connection;

export default db;