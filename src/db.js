const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();

// For now we are going to disable Heroku's auth check when hitting this API from local
// const sslConfig = process.env.SSL_REJECT_UNAUTHORIZED === 'false' ? { rejectUnauthorized: false } : true;
const sslAuth = process.env.SSL_REJECT_UNAUTHORIZED

const client = new pg.Client({
    ssl: sslAuth,
    connectionString: process.env.DATABASE_URL
});

client.connect();

module.exports = { client };