import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg; 

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

console.log('DB_HOST:', DB_HOST);
console.log('DB_USER:', DB_USER);
console.log('DB_PASSWORD:', DB_PASSWORD);
console.log('DB_DATABASE:', DB_DATABASE);

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_DATABASE,
    allowExitOnIdle: true    
    }

    const pool = new Pool(config);

//test de conexión
//(async () => {
//    try {
//      const client = await pool.connect();
//      console.log('Connected to the database');
//      client.release();
//    } catch (err) {
//      console.error('Error connecting to the database', err.stack);
//    }
//  })();

export default pool;