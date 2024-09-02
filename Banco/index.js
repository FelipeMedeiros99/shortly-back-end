import pg from "pg";
import dotenv from "dotenv"

// env
dotenv.config()

// vars
const {LINK_BANCO:linkBanco} = process.env;

const { Pool } = pg;

const db = new Pool({
    connectionString: linkBanco
});

export default db;

