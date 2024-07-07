const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3002;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await axios.get('http://registration-service:3001/users');
    const users = response.data;

    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
    }

    res.json({ message: 'Authentication successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Login service running at http://localhost:${port}/`);
});
