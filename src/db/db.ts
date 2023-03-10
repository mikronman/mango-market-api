import { Client } from 'pg';

const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export { client };