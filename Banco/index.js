import pg from "pg";
import dotenv from "dotenv"

// env
dotenv.config()

// vars
const {host, port, user, password, database} = process.env;

const { Pool } = pg;

const db = new Pool({
    host,
    port,
    user,
    password,
    database
});

export default db;
