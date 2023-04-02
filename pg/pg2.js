const { Pool } = require('pg');
const names = require('names');
const crypto = require('crypto');
const string = require('string');
const secrets = require('secrets');
const sleep = require('util').promisify(setTimeout);

const pool = new Pool({
  user: 'padawan_user_28',
  host: '159.69.151.133',
  database: 'qa_ddl_31_28',
  password: '24693',
  port: 5056,
});

const user_data_list = [];

async function main() {
  const alphabet = string.ascii_letters + string.digits;
  const pwd_length = 12;

  for (let i = 0; i < 50; i++) {
    const pwd = crypto.randomBytes(pwd_length).reduce((acc, val) => acc + alphabet[val % alphabet.length], '');
    const phn = '+'.concat(secrets.randomNumber({ min: 1e10, max: 9.9e10 }).toString());

    const user_name = names.getRandomName();
    const user_email = user_name.replace(' ', '.') + '@gmail.com';
    const user_password = pwd;
    const user_phone = phn;

    const based_data = [user_email, user_password, user_phone, user_name];
    user_data_list.push(based_data);

    const insert_query = 'INSERT INTO public.users(email, password_field, phone, user_name) VALUES($1, $2, $3, $4)';
    await pool.query(insert_query, based_data);
    console.log(based_data);
    await sleep(200);
  }

  // const truncate_query = 'TRUNCATE TABLE public.users';
  // await pool.query(truncate_query);
  await pool.end();
}

main().catch((err) => console.error(err.stack));
