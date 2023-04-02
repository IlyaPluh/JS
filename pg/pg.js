const { Pool } = require('pg');

//npm install pg

const pool = new Pool({
  user: 'padawan_user_28',
  host: '159.69.151.133',
  database: 'qa_ddl_31_28',
  password: '24693',
  port: 5056,
});

(async () => {
  const client = await pool.connect();

  try {
    console.log('Connection true');
    const sql_req = 'SELECT * FROM salary';
    const res = await client.query(sql_req);

    console.log(res.fields[1].name);
    console.log(res.rows);

    for (const row of res.rows) {
      console.log(`id = ${row.id}, salary = ${row.salary}`);
    }
  } finally {
    client.release();
    await pool.end();
  }
})();
