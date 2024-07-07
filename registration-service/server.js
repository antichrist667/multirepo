// registration-service/server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Lista de usuarios en memoria
const users = [];

// Endpoint para registrar un nuevo usuario
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  
  // Agregar el nuevo usuario a la lista en memoria
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  
  res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
});

// Endpoint para obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Registration service running at http://localhost:${port}/`);
});
