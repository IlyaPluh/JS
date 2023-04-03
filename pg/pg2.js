const { Pool } = require('pg');
const faker = require('faker');

const pool = new Pool({
  user: 'padawan_user_28',
  host: '159.69.151.133',
  database: 'qa_ddl_31_28',
  password: '24693',
  port: 5056,
});

for (let i = 0; i < 50; i++) {
    const user_name = faker.name.findName();
    const user_email = user_name.replace(' ', '.') + '@gmail.com';
    const user_password = faker.internet.password(12);
    const user_phone = '+375' + faker.phone.phoneNumber('#########');

    const based_data = [user_email, user_password, user_phone, user_name];
    const insert_query = 'INSERT INTO public.users(email, password_field, phone, user_name) VALUES($1, $2, $3, $4)';
    pool.query(insert_query, based_data)
    console.log(based_data)
}

// const truncate_query = 'TRUNCATE public.users';
// pool.query(truncate_query, (err, res) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log('Table truncated successfully');
//     }
//   });

pool.end();


