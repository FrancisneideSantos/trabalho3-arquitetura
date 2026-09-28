import pg from'pg'; 

import 'dotenv/config' ;

export const pool = new pg.Pool({
    connectionString: 'postgres://postgres:vamosla@localhost:5432/trabalho2',
    max: 10,
    idleTimeoutMillis: 30000,
});