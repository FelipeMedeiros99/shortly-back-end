import pg from "pg";
import dotenv from "dotenv"

// env
dotenv.config()

// vars
const {HOST: host, PORT: port, USER:user, PASSWORD:password, DATABASE:database} = process.env;

const { Pool } = pg;

const db = new Pool({
    host,
    port: Number(port),
    user,
    password,
    database
});

export default db;

