const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

// Middleware
app.use(bodyParser.json());

// In-memory user list
const users = [];

// Endpoint to register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  
  // Add the new user to the in-memory list
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  
  res.status(201).json({ message: 'User registered succesfully', user: newUser });
});

// Endpoint to get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Update user endpoint
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const user = users.find(u => u.id === parseInt(id));

  if (user) {
    user.username = username || user.username;
    user.password = password || user.password;
    res.json({ message: 'User updated successfully', user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Registration service running at ${port}/`);
});
