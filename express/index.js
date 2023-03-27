const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/python_req_1', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  const salary = req.body.salary;
  const car = req.body.car;

  const result = {
    'user_name': name,
    'user_age': age,
    'user_salary': salary,
    'user_car': car
  };

  res.status(200).json(result);
});

app.all('/python_req_2', (req, res) => {
  const method = req.method;

  if (method === 'GET') {
    const model = req.query.model;
    const title = req.query.title;
    const price = parseInt(req.body.price) + 10000;
    const options = req.body.options;

    const result = {
      'car_model': model,
      'car_title': title,
      'car_price': price,
      'car_options': options
    };

    res.status(288).json(result);
  } else if (method === 'POST') {
    const model = req.body.model;
    const title = req.body.title;
    const price = parseInt(req.body.price) + 100000;
    const options = req.body.options;

    const result = {
      'car_model': model,
      'car_title': title,
      'car_price': price,
      'car_options': options
    };

    res.status(288).json(result);
  } else {
    res.status(405).send('Method Not Allowed');
  }
});

app.listen(5005, () => {
  console.log('Server is running on port 5005');
});
