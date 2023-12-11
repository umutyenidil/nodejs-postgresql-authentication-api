import pg from 'pg';

const {Pool} = pg;

let localPoolConfig = {
    user: 'postgres',
    password: 'test',
    port: '5432',
    database: 'nodejs_postgresql_auth_db',
};

const poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {refectUnauthorized: false}
} : localPoolConfig;

const pool = new Pool(poolConfig);

export default pool;