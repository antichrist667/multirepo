const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
});

app.get('/register', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Registration service is running on port ${PORT}`);
});
