const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3003;
const JWT_SECRET = 'your_jwt_secret';

app.use(bodyParser.json());

let users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' }
];

app.put('/update', (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const { username, password } = req.body;
    const userIndex = users.findIndex(user => user.username === decoded.username);
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    users[userIndex] = { username, password };
    res.json({ message: 'Credentials updated successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Update service is running on port ${PORT}`);
});
