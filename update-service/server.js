const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3003;

app.use(bodyParser.json());

// Update user credentials endpoint
app.put('/update', async (req, res) => {
  const { username, password, newUsername, newPassword } = req.body;

  try {
    // Fetch the list of users
    const response = await axios.get('http://registration-service:3001/users');
    const users = response.data;

    // Find the user by username and password
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      return res.status(404).json({ message: 'User not found or incorrect credentials' });
    }

    // Update user details
    user.username = newUsername || user.username;
    user.password = newPassword || user.password;

    // Send the updated user back to the registration service
    await axios.put(`http://registration-service:3001/users/${user.id}`, user);
    
    res.json({ message: 'User credentials updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Update service running at http://localhost:${port}/`);
});
