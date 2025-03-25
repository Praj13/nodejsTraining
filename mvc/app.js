const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
