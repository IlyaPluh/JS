const truncate_query = 'TRUNCATE public.users';
pool.query(truncate_query, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('Table truncated successfully');
    }
  });