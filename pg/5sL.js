const { Pool } = require('pg');

//npm install pg

const pool = new Pool({
  user: '5s',
  host: 'kodsql\\winkhouse',
  database: 'whnet',
  password: 'nX1!Y14p9h#a',
  port: 1455,
});

(async () => {
  const client = await pool.connect();

  try {
    console.log('Connection true');
    const sql_req = 'SELECT * FROM Auta';
    const res = await client.query(sql_req);

    console.log(res.fields[1].name);
    console.log(res.rows);

} finally {
    client.release();
    await pool.end();
  }
})();