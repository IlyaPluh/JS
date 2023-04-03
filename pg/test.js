const { Pool } = require('pg');

const pool = new Pool({
  user: 'padawan_user_28',
  host: '159.69.151.133',
  database: 'qa_ddl_31_28',
  password: '24693',
  port: 5056,
});

const insertQuery = 'INSERT INTO public.users (email, password_field, phone, user_name) VALUES ($1, $2, $3, $4)';
const values = ['test@test.com', 'password', '+1234567890', 'John Doe'];

pool.query(insertQuery, values, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('New user added successfully!');
  }
  pool.end();
});
